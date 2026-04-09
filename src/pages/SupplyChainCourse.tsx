import { useState } from 'react';

export default function SupplyChainCourse() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="/" className="hover:text-amber-600 transition-colors">李乐怡</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-amber-600 transition-colors">首页</a>
            <a href="/#courses" className="text-gray-600 hover:text-amber-600 transition-colors">课程</a>
            <a href="/#contact" className="text-gray-600 hover:text-amber-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <section className="pt-32 pb-16 px-4 bg-amber-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col">
            <a href="/" className="text-white hover:text-amber-100 transition-colors mb-4 inline-flex items-center">
              <span className="mr-2">←</span> 返回首页
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">供应链数据分析</h1>
            <p className="text-xl text-amber-100 mb-6">商务数据分析与应用专业 · 高职大二第二学期</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">专业课程</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">48课时</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">3学分</span>
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
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              课程概述
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'syllabus'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              课程大纲
            </button>
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'teaching'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              教学方法
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'assessment'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-amber-600'
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
                    《供应链数据分析》是商务数据分析与应用专业的专业特色课程，面向高职大二第二学期学生开设。
                    本课程在学生已掌握数据分析技术、数据采集与处理等课程的基础上，
                    聚焦供应链领域的数据应用，培养学生运用数据分析技术解决供应链管理实际问题的能力。
                  </p>
                  <p>
                    课程通过理论与实践相结合的方式，以真实供应链场景为案例，
                    使学生掌握供应链数据分析的方法、工具和技术，具备供应链优化决策能力。
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                    <h3 className="font-semibold text-amber-800 mb-2">课程目标</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>理解供应链管理的基本概念和流程</li>
                      <li>掌握供应链数据分析的方法和技术</li>
                      <li>能够运用数据分析优化供应链各环节</li>
                      <li>具备供应链预测、库存优化、配送优化能力</li>
                      <li>培养数据驱动的供应链决策思维</li>
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第1-2周：供应链管理基础</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>供应链的概念与重要性</li>
                      <li>供应链主要环节与流程</li>
                      <li>供应链面临的挑战与机遇</li>
                      <li>数据分析在供应链中的应用</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第3-4周：需求预测</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>需求预测的重要性</li>
                      <li>时间序列预测方法</li>
                      <li>季节性和趋势性预测</li>
                      <li>Python实现：使用pandas和statsmodels</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第5-6周：库存管理优化</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>库存管理的基本概念</li>
                      <li>ABC分类法</li>
                      <li>经济订货批量(EOQ)模型</li>
                      <li>安全库存计算</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第7-8周：供应商管理</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>供应商评估指标</li>
                      <li>供应商绩效分析</li>
                      <li>供应商选择决策</li>
                      <li>供应商关系管理数据分析</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第9-10周：物流配送优化</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>物流网络设计</li>
                      <li>路径优化问题</li>
                      <li>配送中心选址</li>
                      <li>运输成本分析</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第11-12周：供应链可视化</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>供应链数据可视化原则</li>
                      <li>供应链仪表盘设计</li>
                      <li>实时监控报表</li>
                      <li>Python实现：使用Plotly和Dash</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第13-14周：综合项目实践</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>企业供应链数据案例分析</li>
                      <li>供应链优化方案设计</li>
                      <li>项目实施与验证</li>
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
                    <h3 className="font-semibold text-gray-800 mb-2">案例教学</h3>
                    <p>通过真实企业供应链案例，讲解数据分析在供应链管理中的应用。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目实践</h3>
                    <p>以供应链优化项目为载体，让学生在实践中掌握供应链数据分析技术。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">模拟仿真</h3>
                    <p>通过供应链模拟软件，让学生体验供应链决策的影响。</p>
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
                    <h3 className="font-semibold text-gray-800 mb-2">平时成绩（40%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>课堂参与：10%</li>
                      <li>作业完成：15%</li>
                      <li>实验报告：15%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目成绩（30%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>项目设计：10%</li>
                      <li>项目实施：10%</li>
                      <li>项目报告：10%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">期末考试（30%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>理论知识：15%</li>
                      <li>案例分析：15%</li>
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