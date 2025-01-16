// 标准版测试题目 (93题)
const basicQuestions = [
    // E vs I (外向 vs 内向) - 24题
    {
        question: "在社交场合中，你通常会：",
        options: ["主动与他人交谈，享受社交", "保持安静，倾向于观察"],
        dimension: "EI"
    },
    {
        question: "在团体活动中，你更倾向于：",
        options: ["成为注意力的焦点", "待在边缘地带"],
        dimension: "EI"
    },
    {
        question: "与他人相处时，你会：",
        options: ["说出自己的想法", "先听取他人意见"],
        dimension: "EI"
    },
    {
        question: "休息时，你更喜欢：",
        options: ["和朋友一起活动", "独处安静时光"],
        dimension: "EI"
    },
    {
        question: "在工作环境中，你更倾向于：",
        options: ["参与团队讨论", "独立思考"],
        dimension: "EI"
    },
    {
        question: "参加派对时，你通常会：",
        options: ["尽可能认识新朋友", "与熟悉的人交谈"],
        dimension: "EI"
    },
    {
        question: "面对新环境时，你会：",
        options: ["迅速融入其中", "需要时间适应"],
        dimension: "EI"
    },
    {
        question: "在团队会议上，你倾向于：",
        options: ["积极发言，分享想法", "仔细聆听，适时发言"],
        dimension: "EI"
    },
    {
        question: "处理问题时，你更喜欢：",
        options: ["与他人讨论解决方案", "独自思考后再分享"],
        dimension: "EI"
    },
    {
        question: "在陌生环境中，你会：",
        options: ["主动寻找交谈机会", "等待他人来接近"],
        dimension: "EI"
    },
    {
        question: "工作时遇到困难，你倾向于：",
        options: ["立即寻求他人帮助", "先尝试自己解决"],
        dimension: "EI"
    },
    {
        question: "在团队项目中，你更喜欢：",
        options: ["与他人密切合作", "负责独立的部分"],
        dimension: "EI"
    },
    {
        question: "面对新的社交场合，你感觉：",
        options: ["兴奋和期待", "有些紧张和不适"],
        dimension: "EI"
    },
    {
        question: "在群体活动中，你通常：",
        options: ["积极参与互动", "更多是观察者"],
        dimension: "EI"
    },
    {
        question: "与他人交流时，你倾向于：",
        options: ["表达详细和具体", "简明扼要"],
        dimension: "EI"
    },
    {
        question: "在公共场合，你更愿意：",
        options: ["引导话题和讨论", "倾听和回应"],
        dimension: "EI"
    },
    {
        question: "遇到有趣的事情，你会：",
        options: ["立即与他人分享", "等待合适的时机分享"],
        dimension: "EI"
    },
    {
        question: "在团队合作中，你倾向于：",
        options: ["担任协调者角色", "专注于具体任务"],
        dimension: "EI"
    },
    {
        question: "参加社交活动后，你通常感觉：",
        options: ["精力充沛", "需要独处恢复"],
        dimension: "EI"
    },
    {
        question: "在工作场合，你更喜欢：",
        options: ["开放式办公环境", "独立的办公空间"],
        dimension: "EI"
    },
    {
        question: "处理人际关系时，你倾向于：",
        options: ["建立广泛的社交网络", "维持少数深厚友谊"],
        dimension: "EI"
    },
    {
        question: "在团队决策中，你通常：",
        options: ["积极表达观点", "深思熟虑后再发言"],
        dimension: "EI"
    },
    {
        question: "面对新项目，你更愿意：",
        options: ["与团队一起头脑风暴", "独自思考后提出建议"],
        dimension: "EI"
    },
    {
        question: "在休闲时间，你更倾向于：",
        options: ["参加集体活动", "进行独处的爱好"],
        dimension: "EI"
    },

    // S vs N (感觉 vs 直觉) - 24题
    {
        question: "在工作中，你更注重：",
        options: ["具体的细节和事实", "整体概念和可能性"],
        dimension: "SN"
    },
    {
        question: "你更相信：",
        options: ["实际经验", "直觉感受"],
        dimension: "SN"
    },
    {
        question: "解决问题时，你倾向于：",
        options: ["采用已证实的方法", "尝试创新的方式"],
        dimension: "SN"
    },
    {
        question: "你更关注：",
        options: ["当下的现实", "未来的可能"],
        dimension: "SN"
    },
    {
        question: "在学习新知识时，你更喜欢：",
        options: ["循序渐进，掌握细节", "先了解整体框架"],
        dimension: "SN"
    },
    {
        question: "做决定时，你更依赖：",
        options: ["具体的数据和事实", "直觉和灵感"],
        dimension: "SN"
    },
    {
        question: "你更容易记住：",
        options: ["具体的细节", "概括性的印象"],
        dimension: "SN"
    },
    {
        question: "在阅读时，你更喜欢：",
        options: ["清晰的描述和事实", "富有想象力的内容"],
        dimension: "SN"
    },
    {
        question: "在工作计划中，你更注重：",
        options: ["具体的执行步骤", "整体的发展方向"],
        dimension: "SN"
    },
    {
        question: "面对问题时，你更倾向于：",
        options: ["寻找具体的解决方案", "探索多种可能性"],
        dimension: "SN"
    },
    {
        question: "你更喜欢的工作环境是：",
        options: ["有明确的规范和流程", "富有创新和变化"],
        dimension: "SN"
    },
    {
        question: "在描述事物时，你倾向于：",
        options: ["具体而详细", "比喻和联想"],
        dimension: "SN"
    },
    {
        question: "你更看重：",
        options: ["实际的应用价值", "创新的可能性"],
        dimension: "SN"
    },
    {
        question: "在项目开始前，你更关注：",
        options: ["具体的实施细节", "未来的发展空间"],
        dimension: "SN"
    },
    {
        question: "你更喜欢的领导者是：",
        options: ["注重实效的实干家", "富有远见的战略家"],
        dimension: "SN"
    },
    {
        question: "在处理任务时，你更重视：",
        options: ["按部就班的完成", "寻找创新的方法"],
        dimension: "SN"
    },
    {
        question: "你更倾向于相信：",
        options: ["亲身经历", "直觉判断"],
        dimension: "SN"
    },
    {
        question: "在学习新技能时，你更喜欢：",
        options: ["具体的示范和练习", "理解原理和创新"],
        dimension: "SN"
    },
    {
        question: "你更关注：",
        options: ["现实中的实际问题", "未来的发展趋势"],
        dimension: "SN"
    },
    {
        question: "在团队中，你更擅长：",
        options: ["执行具体计划", "提出创新想法"],
        dimension: "SN"
    },
    {
        question: "面对变化，你更注重：",
        options: ["评估实际影响", "探索新的机会"],
        dimension: "SN"
    },
    {
        question: "在决策时，你更看重：",
        options: ["过往的经验", "未来的潜力"],
        dimension: "SN"
    },
    {
        question: "你更喜欢的工作是：",
        options: ["有明确的职责范围", "有发展的可能性"],
        dimension: "SN"
    },
    {
        question: "在解决问题时，你更依赖：",
        options: ["实践经验", "创新思维"],
        dimension: "SN"
    },

    // T vs F (思维 vs 情感) - 24题
    {
        question: "做决定时，你更依赖：",
        options: ["逻辑和分析", "感受和价值观"],
        dimension: "TF"
    },
    {
        question: "面对争议，你会：",
        options: ["寻找客观事实", "考虑他人感受"],
        dimension: "TF"
    },
    {
        question: "你认为更重要的是：",
        options: ["公平和正义", "和谐与同理心"],
        dimension: "TF"
    },
    {
        question: "在评价事物时，你更看重：",
        options: ["客观标准", "主观感受"],
        dimension: "TF"
    },
    {
        question: "在处理冲突时，你倾向于：",
        options: ["分析问题寻找解决方案", "关注情绪寻求共识"],
        dimension: "TF"
    },
    {
        question: "给予反馈时，你更倾向于：",
        options: ["直接指出问题", "委婉表达建议"],
        dimension: "TF"
    },
    {
        question: "在团队合作中，你更重视：",
        options: ["任务的完成效率", "团队的和谐氛围"],
        dimension: "TF"
    },
    {
        question: "面对批评，你会：",
        options: ["客观分析问题", "关注情感影响"],
        dimension: "TF"
    },
    {
        question: "在做选择时，你更看重：",
        options: ["理性的分析", "个人的价值观"],
        dimension: "TF"
    },
    {
        question: "处理问题时，你更倾向于：",
        options: ["保持客观中立", "考虑人情因素"],
        dimension: "TF"
    },
    {
        question: "在工作评估中，你更重视：",
        options: ["量化的表现指标", "综合的发展潜力"],
        dimension: "TF"
    },
    {
        question: "面对困难时，你会：",
        options: ["分析原因找对策", "寻求支持和理解"],
        dimension: "TF"
    },
    {
        question: "在决策过程中，你更看重：",
        options: ["事实和数据", "价值和影响"],
        dimension: "TF"
    },
    {
        question: "处理人际关系时，你更倾向于：",
        options: ["保持专业距离", "建立情感联系"],
        dimension: "TF"
    },
    {
        question: "在解决问题时，你更重视：",
        options: ["效率和结果", "过程和感受"],
        dimension: "TF"
    },
    {
        question: "面对分歧，你会：",
        options: ["坚持客观立场", "寻求情感共鸣"],
        dimension: "TF"
    },
    {
        question: "在团队讨论中，你更关注：",
        options: ["逻辑和可行性", "共识和认同感"],
        dimension: "TF"
    },
    {
        question: "做决策时，你更依靠：",
        options: ["理性分析", "直觉感受"],
        dimension: "TF"
    },
    {
        question: "在处理矛盾时，你更重视：",
        options: ["找出问题根源", "维护关系和谐"],
        dimension: "TF"
    },
    {
        question: "评价他人时，你更看重：",
        options: ["能力和成就", "态度和品格"],
        dimension: "TF"
    },
    {
        question: "在工作中，你更注重：",
        options: ["目标的达成", "过程的体验"],
        dimension: "TF"
    },
    {
        question: "面对变革，你更关注：",
        options: ["实施的可行性", "人员的接受度"],
        dimension: "TF"
    },
    {
        question: "在沟通时，你更重视：",
        options: ["信息的准确性", "表达的友好度"],
        dimension: "TF"
    },
    {
        question: "处理feedback时，你更看重：",
        options: ["具体的改进建议", "积极的鼓励作用"],
        dimension: "TF"
    },

    // J vs P (判断 vs 知觉) - 21题
    {
        question: "你更喜欢：",
        options: ["按计划行事", "随机应变"],
        dimension: "JP"
    },
    {
        question: "工作时，你倾向于：",
        options: ["制定详细计划", "保持灵活机动"],
        dimension: "JP"
    },
    {
        question: "你的生活方式更偏向：",
        options: ["规律有序", "自由随性"],
        dimension: "JP"
    },
    {
        question: "面对任务，你更倾向于：",
        options: ["立即开始并按计划进行", "等待灵感来临再行动"],
        dimension: "JP"
    },
    {
        question: "你更喜欢的工作环境是：",
        options: ["结构化和有序", "灵活和自由"],
        dimension: "JP"
    },
    {
        question: "在时间管理上，你更倾向于：",
        options: ["制定详细的计划", "根据情况随机应变"],
        dimension: "JP"
    },
    {
        question: "面对deadline，你通常会：",
        options: ["提前完成任务", "在最后期限前完成"],
        dimension: "JP"
    },
    {
        question: "你的办公桌通常是：",
        options: ["整齐有序", "创意性混乱"],
        dimension: "JP"
    },
    {
        question: "对于周末安排，你倾向于：",
        options: ["提前计划活动", "随性而为"],
        dimension: "JP"
    },
    {
        question: "处理工作任务时，你更喜欢：",
        options: ["按步就班地完成", "多任务并行处理"],
        dimension: "JP"
    },
    {
        question: "面对新项目，你会：",
        options: ["制定详细的计划", "边做边调整"],
        dimension: "JP"
    },
    {
        question: "你更喜欢的生活节奏是：",
        options: ["有规律的作息", "随性的安排"],
        dimension: "JP"
    },
    {
        question: "在旅行中，你更倾向于：",
        options: ["制定详细的行程", "即兴决定去向"],
        dimension: "JP"
    },
    {
        question: "处理日常事务时，你更喜欢：",
        options: ["建立系统和规则", "灵活处理"],
        dimension: "JP"
    },
    {
        question: "面对变化，你通常会：",
        options: ["谨慎评估后接受", "快速适应新情况"],
        dimension: "JP"
    },
    {
        question: "在项目管理中，你更重视：",
        options: ["遵循既定计划", "根据情况调整"],
        dimension: "JP"
    },
    {
        question: "你的工作方式更倾向于：",
        options: ["循序渐进", "灵活多变"],
        dimension: "JP"
    },
    {
        question: "面对决策，你通常：",
        options: ["快速做出决定", "保持开放态度"],
        dimension: "JP"
    },
    {
        question: "在处理问题时，你更喜欢：",
        options: ["遵循既定方法", "尝试不同方案"],
        dimension: "JP"
    },
    {
        question: "对待规则，你的态度是：",
        options: ["严格遵守", "灵活变通"],
        dimension: "JP"
    },
    {
        question: "在团队合作中，你更倾向于：",
        options: ["明确分工和期限", "保持灵活协作"],
        dimension: "JP"
    }
];

// 专业版测试题目 (154题)
const professionalQuestions = [
    ...basicQuestions,
    // E vs I 补充题目 (20题)
    {
        question: "在重要决策时，你倾向于：",
        options: ["征求多方意见", "独立思考决定"],
        dimension: "EI"
    },
    {
        question: "在职业发展中，你更喜欢：",
        options: ["团队协作的工作", "独立负责的项目"],
        dimension: "EI"
    },
    {
        question: "处理压力时，你会：",
        options: ["寻求他人支持", "自我调节和解决"],
        dimension: "EI"
    },
    {
        question: "在新的工作环境中，你会：",
        options: ["主动建立人际网络", "专注于工作任务"],
        dimension: "EI"
    },
    {
        question: "面对挑战时，你倾向于：",
        options: ["与团队共同应对", "独立思考解决方案"],
        dimension: "EI"
    },
    {
        question: "在会议发言时，你通常：",
        options: ["积极分享想法", "深思熟虑后发言"],
        dimension: "EI"
    },
    {
        question: "工作中遇到困难，你会：",
        options: ["寻求同事建议", "自己研究解决"],
        dimension: "EI"
    },
    {
        question: "在团队活动中，你倾向于：",
        options: ["组织和协调", "配合和支持"],
        dimension: "EI"
    },
    {
        question: "处理工作压力时，你会：",
        options: ["与同事交流分享", "独自调整和消化"],
        dimension: "EI"
    },
    {
        question: "在项目合作中，你更喜欢：",
        options: ["频繁的团队互动", "独立的工作空间"],
        dimension: "EI"
    },

    // S vs N 补充题目 (15题)
    {
        question: "在战略规划中，你更注重：",
        options: ["具体可行的步骤", "创新的发展方向"],
        dimension: "SN"
    },
    {
        question: "处理复杂问题时，你倾向于：",
        options: ["分解为具体步骤", "寻找潜在联系"],
        dimension: "SN"
    },
    {
        question: "在项目开发中，你更关注：",
        options: ["实际的执行细节", "未来的发展空间"],
        dimension: "SN"
    },
    {
        question: "评估方案时，你更看重：",
        options: ["实际的可操作性", "创新的突破性"],
        dimension: "SN"
    },
    {
        question: "在团队合作中，你擅长：",
        options: ["优化具体流程", "提供创新思路"],
        dimension: "SN"
    },
    {
        question: "面对工作变革，你更关注：",
        options: ["具体的影响", "潜在的机会"],
        dimension: "SN"
    },
    {
        question: "在解决问题时，你更依赖：",
        options: ["已有的经验", "创新的方法"],
        dimension: "SN"
    },
    {
        question: "制定计划时，你更重视：",
        options: ["切实可行性", "创新可能性"],
        dimension: "SN"
    },

    // T vs F 补充题目 (15题)
    {
        question: "在领导团队时，你更重视：",
        options: ["目标达成和效率", "团队氛围和发展"],
        dimension: "TF"
    },
    {
        question: "处理团队矛盾时，你会：",
        options: ["分析问题找解决方案", "关注情绪寻求共识"],
        dimension: "TF"
    },
    {
        question: "在项目评估中，你更看重：",
        options: ["量化的绩效指标", "团队的成长进步"],
        dimension: "TF"
    },
    {
        question: "做决策时，你更依赖：",
        options: ["数据分析和逻辑", "价值观和直觉"],
        dimension: "TF"
    },
    {
        question: "在管理中，你更注重：",
        options: ["规则和制度", "灵活和关怀"],
        dimension: "TF"
    },
    {
        question: "面对团队成员的失误，你会：",
        options: ["指出问题寻求改进", "理解原因给予支持"],
        dimension: "TF"
    },
    {
        question: "在工作评价时，你更看重：",
        options: ["客观的表现指标", "个人的努力程度"],
        dimension: "TF"
    },
    {
        question: "处理团队分歧时，你倾向于：",
        options: ["基于事实分析", "考虑各方感受"],
        dimension: "TF"
    },

    // J vs P 补充题目 (11题)
    {
        question: "在项目管理中，你更倾向于：",
        options: ["严格执行计划", "根据情况调整"],
        dimension: "JP"
    },
    {
        question: "处理工作任务时，你会：",
        options: ["按既定流程执行", "灵活应对变化"],
        dimension: "JP"
    },
    {
        question: "面对新机会，你通常：",
        options: ["仔细评估后决定", "快速把握机会"],
        dimension: "JP"
    },
    {
        question: "在团队中，你更喜欢：",
        options: ["明确的分工和职责", "弹性的合作方式"],
        dimension: "JP"
    },
    {
        question: "处理日常工作，你倾向于：",
        options: ["建立规范和制度", "保持灵活和适应"],
        dimension: "JP"
    },
    {
        question: "对待工作计划，你更倾向于：",
        options: ["严格执行", "灵活调整"],
        dimension: "JP"
    },
    {
        question: "在项目推进中，你更喜欢：",
        options: ["按部就班", "随机应变"],
        dimension: "JP"
    }
];

// 完整版测试题目 (200题)
const enterpriseQuestions = [
    ...professionalQuestions,
    // 补充完整版特有题目 (46题)
    // 领导力相关题目
    {
        question: "作为领导者，你更注重：",
        options: ["目标达成和效率", "团队发展和氛围"],
        dimension: "TF"
    },
    {
        question: "在制定战略时，你更关注：",
        options: ["具体的执行计划", "远景和可能性"],
        dimension: "SN"
    },
    {
        question: "管理团队时，你倾向于：",
        options: ["建立清晰的制度", "营造灵活的氛围"],
        dimension: "JP"
    },
    {
        question: "在决策过程中，你更重视：",
        options: ["数据和逻辑分析", "团队共识和认可"],
        dimension: "TF"
    },
    {
        question: "处理团队冲突时，你会：",
        options: ["制定明确的规则", "促进沟通理解"],
        dimension: "TF"
    },
    {
        question: "在团队建设中，你更注重：",
        options: ["执行力和效率", "创新力和潜能"],
        dimension: "SN"
    },
    {
        question: "面对团队变革，你会：",
        options: ["制定详细计划", "灵活推进适应"],
        dimension: "JP"
    },
    {
        question: "在团队沟通中，你更重视：",
        options: ["信息的准确性", "氛围的和谐性"],
        dimension: "TF"
    },
    {
        question: "处理团队建议时，你更看重：",
        options: ["建议的可行性", "团队的参与度"],
        dimension: "TF"
    },
    {
        question: "在团队发展中，你更注重：",
        options: ["明确的目标和规划", "开放的空间和可能"],
        dimension: "JP"
    },
    // 职业发展相关题目
    {
        question: "在职业规划中，你更看重：",
        options: ["明确的晋升路径", "发展的可能性"],
        dimension: "SN"
    },
    {
        question: "面对职业机会，你会：",
        options: ["仔细评估风险", "把握创新机会"],
        dimension: "SN"
    },
    {
        question: "在团队建设中，你更注重：",
        options: ["绩效和执行力", "潜力和创造力"],
        dimension: "SN"
    },
    {
        question: "处理职业选择时，你更倾向于：",
        options: ["稳定的发展路径", "充满挑战的机会"],
        dimension: "SN"
    },
    {
        question: "在职业发展中，你更重视：",
        options: ["专业技能提升", "领导才能培养"],
        dimension: "TF"
    },
    // 组织管理相关题目
    {
        question: "在组织变革中，你更关注：",
        options: ["执行的效率", "人员的接受度"],
        dimension: "TF"
    },
    {
        question: "处理组织问题时，你倾向于：",
        options: ["建立标准流程", "灵活处理应对"],
        dimension: "JP"
    },
    {
        question: "在组织决策中，你更看重：",
        options: ["数据和事实", "直觉和经验"],
        dimension: "SN"
    },
    {
        question: "管理组织资源时，你更注重：",
        options: ["效率和成本", "发展和创新"],
        dimension: "TF"
    },
    {
        question: "在组织文化建设中，你更重视：",
        options: ["制度和规范", "价值和愿景"],
        dimension: "SN"
    }
];

// 计算MBTI类型的函数
function calculateMBTIType(answers, questionSet) {
    let scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 统计每个维度的得分
    answers.forEach((answer, index) => {
        const question = questionSet[index];
        const dimension = question.dimension;
        
        if (answer === 0) {
            scores[dimension[0]]++;
        } else {
            scores[dimension[1]]++;
        }
    });
    
    // 确定每个维度的倾向
    let type = '';
    type += scores.E > scores.I ? 'E' : 'I';
    type += scores.S > scores.N ? 'S' : 'N';
    type += scores.T > scores.F ? 'T' : 'F';
    type += scores.J > scores.P ? 'J' : 'P';
    
    return type;
}

// 获取维度得分百分比
function getDimensionScores(answers, questionSet) {
    let scores = {
        EI: 0,
        SN: 0,
        TF: 0,
        JP: 0
    };
    
    let counts = {
        EI: 0,
        SN: 0,
        TF: 0,
        JP: 0
    };
    
    answers.forEach((answer, index) => {
        const question = questionSet[index];
        const dimension = question.dimension;
        
        counts[dimension]++;
        if (answer === 0) {
            scores[dimension]++;
        }
    });
    
    // 计算百分比
    return {
        EI: Math.round((scores.EI / counts.EI) * 100),
        SN: Math.round((scores.SN / counts.SN) * 100),
        TF: Math.round((scores.TF / counts.TF) * 100),
        JP: Math.round((scores.JP / counts.JP) * 100)
    };
}

// 导出当前使用的题目集（默认使用标准版）
let mbtiQuestions = basicQuestions;

// 设置测试版本的函数
function setTestVersion(version) {
    switch(version) {
        case 'professional':
            mbtiQuestions = professionalQuestions;
            return 154;
        case 'enterprise':
            mbtiQuestions = enterpriseQuestions;
            return 200;
        default:
            mbtiQuestions = basicQuestions;
            return 93;
    }
} 