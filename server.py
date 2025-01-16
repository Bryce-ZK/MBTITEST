from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
import base64
import os
import traceback

app = Flask(__name__)
CORS(app)

# 邮件服务器配置
SMTP_SERVER = "smtp.163.com"
SMTP_PORT = 465
SENDER_EMAIL = "mbti_test088@163.com"
SENDER_PASSWORD = "AYgcRqY8bwvaAmQA"

@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"status": "Server is running!"})

@app.route('/api/send_email', methods=['POST'])
def send_email():
    try:
        print("开始处理邮件发送请求...")
        data = request.json
        recipient_email = data['email']
        pdf_base64 = data['pdfBase64']
        file_name = data['fileName']
        
        print(f"准备发送邮件到: {recipient_email}")

        # 创建邮件
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = recipient_email
        msg['Subject'] = "您的MBTI测试结果报告"

        # 添加邮件正文
        body = """
        您好！

        感谢您使用我们的MBTI性格测试系统。
        您的测试结果报告已附在此邮件中，请查收。

        祝您生活愉快！
        """
        msg.attach(MIMEText(body, 'plain'))

        # 添加PDF附件
        try:
            pdf_data = base64.b64decode(pdf_base64)
            pdf_attachment = MIMEApplication(pdf_data, _subtype="pdf")
            pdf_attachment.add_header('Content-Disposition', 'attachment', filename=file_name)
            msg.attach(pdf_attachment)
            print("PDF附件处理完成")
        except Exception as pdf_error:
            print(f"PDF处理错误: {str(pdf_error)}")
            print(traceback.format_exc())
            raise

        # 发送邮件
        try:
            with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
                print("正在登录邮箱...")
                server.login(SENDER_EMAIL, SENDER_PASSWORD)
                print("登录成功，正在发送邮件...")
                server.send_message(msg)
                print("邮件发送成功！")
                return jsonify({"success": True})
        except Exception as smtp_error:
            print(f"SMTP错误: {str(smtp_error)}")
            print(traceback.format_exc())
            raise

    except Exception as e:
        error_msg = str(e)
        stack_trace = traceback.format_exc()
        print(f"发送邮件时出错: {error_msg}")
        print(f"错误堆栈: {stack_trace}")
        return jsonify({
            "success": False,
            "error": error_msg,
            "stack_trace": stack_trace
        })

if __name__ == '__main__':
    print("Starting email server...")
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8001))) 