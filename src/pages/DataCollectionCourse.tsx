import { useState } from 'react';

export default function DataCollectionCourse() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="/" className="hover:text-purple-600 transition-colors">李乐怡</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">首页</a>
            <a href="/#courses" className="text-gray-600 hover:text-purple-600 transition-colors">课程</a>
            <a href="/#contact" className="text-gray-600 hover:text-purple-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <section className="pt-32 pb-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col">
            <a href="/" className="text-white hover:text-purple-100 transition-colors mb-4 inline-flex items-center">
              <span className="mr-2">←</span> 返回首页
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">数据采集与处理</h1>
            <p className="text-xl text-purple-100 mb-6">商务数据分析与应用专业 · 高职大二第一学期</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">核心课程</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">56课时</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">3.5学分</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'overview'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              课程概述
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'syllabus'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              课程大纲
            </button>
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'teaching'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              教学方法
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'assessment'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              评估方式
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">课程概述</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    《数据采集与处理》是商务数据分析与应用专业的核心课程，面向高职大二第一学期学生开设。
                    本课程在学生已掌握Python基础的前提下，进一步培养学生的数据采集、清洗和预处理能力，
                    为数据分析提供高质量的数据基础。
                  </p>
                  <p>
                    课程通过理论与实践相结合的方式，使学生掌握网络爬虫、API数据获取、数据清洗等技术，
                    能够运用Python工具完成各类数据的采集和预处理任务。
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 mb-2">课程目标</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>掌握数据采集的基本方法和技术</li>
                      <li>熟练运用网络爬虫技术获取网络数据</li>
                      <li>掌握数据清洗和预处理技术</li>
                      <li>能够处理各类数据质量问题</li>
                      <li>培养数据治理意识和能力</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === 'syllabus' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">课程大纲</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第1-2周：数据采集基础</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据采集的概念和重要性</li>
                      <li>常见数据来源类型</li>
                      <li>HTTP协议基础</li>
                      <li>Python请求库（requests）使用</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第3-4周：网络爬虫基础</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>HTML结构解析</li>
                      <li>BeautifulSoup库使用</li>
                      <li>XPath选择器</li>
                      <li>CSS选择器</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第5-6周：高级爬虫技术</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>动态网页数据抓取</li>
                      <li>Selenium自动化工具</li>
                      <li>Scrapy框架使用</li>
                      <li>爬虫反爬策略与应对</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第7-8周：API数据采集</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>RESTful API理解</li>
                      <li>API认证方式</li>
                      <li>JSON数据处理</li>
                      <li>第三方API集成（如天气、股票等）</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第9-10周：数据清洗基础</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据质量问题识别</li>
                      <li>缺失值处理策略</li>
                      <li>异常值检测与处理</li>
                      <li>重复数据处理</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第11-12周：数据转换与集成</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据类型转换</li>
                      <li>数据标准化与归一化</li>
                      <li>多源数据集成</li>
                      <li>数据格式转换</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第13-14周：综合项目实践</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>电商平台数据采集</li>
                      <li>社交媒体数据采集</li>
                      <li>数据清洗与整合</li>
                      <li>项目展示与评估</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Teaching Methods Tab */}
            {activeTab === 'teaching' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">教学方法</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目驱动</h3>
                    <p>以实际数据采集项目为驱动，让学生在实践中学习数据采集和处理技术。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">案例教学</h3>
                    <p>通过真实的数据采集案例，讲解各种技术的应用场景和最佳实践。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">问题导向</h3>
                    <p>以解决实际问题为导向，培养学生的问题分析和解决能力。</p>
                  </div>
                </div>
              </div>
            )}

            {/* Assessment Tab */}
            {activeTab === 'assessment' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">评估方式</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">平时成绩（45%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>课堂参与：10%</li>
                      <li>作业完成：20%</li>
                      <li>实验报告：15%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目成绩（25%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>项目设计：10%</li>
                      <li>项目实现：15%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">期末考试（30%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>理论知识：15%</li>
                      <li>实践操作：15%</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2026 李乐怡个人页面</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <span className="text-2xl">🐱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-2xl">💼</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">WeChat</span>
                <span className="text-2xl">💬</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}