from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, Attachment, FileContent, FileName, FileType, Disposition
import base64
import os
import traceback
from datetime import datetime

app = Flask(__name__)
CORS(app)

# SendGrid API配置
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', 'your_sendgrid_api_key')
SENDER_EMAIL = "mbti_test088@163.com"  # 发件人邮箱

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
        message = Mail(
            from_email=SENDER_EMAIL,
            to_emails=recipient_email,
            subject='您的MBTI测试结果报告',
            plain_text_content="""
            您好！

            感谢您使用我们的MBTI性格测试系统。
            您的测试结果报告已附在此邮件中，请查收。

            祝您生活愉快！
            """
        )

        # 添加PDF附件
        attachment = Attachment()
        attachment.file_content = FileContent(pdf_base64)
        attachment.file_type = FileType('application/pdf')
        attachment.file_name = FileName(file_name)
        attachment.disposition = Disposition('attachment')
        message.attachment = attachment

        # 发送邮件
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        
        print(f"邮件发送状态码: {response.status_code}")
        
        if response.status_code in [200, 201, 202]:
            return jsonify({"success": True})
        else:
            return jsonify({
                "success": False,
                "error": f"SendGrid API returned status code: {response.status_code}"
            })

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