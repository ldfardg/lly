import { useState } from 'react';

export default function DataAnalysisCourse() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="/" className="hover:text-blue-600 transition-colors">李乐怡</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
            <a href="/#courses" className="text-gray-600 hover:text-blue-600 transition-colors">课程</a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <section className="pt-32 pb-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col">
            <a href="/" className="text-white hover:text-blue-100 transition-colors mb-4 inline-flex items-center">
              <span className="mr-2">←</span> 返回首页
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">数据分析技术</h1>
            <p className="text-xl text-blue-100 mb-6">商务数据分析与应用专业 · 高职大二第二学期</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">核心课程</span>
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
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              课程概述
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'syllabus'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              课程大纲
            </button>
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'teaching'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              教学方法
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'assessment'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
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
                    《数据分析技术》是商务数据分析与应用专业的核心课程，面向高职大二第二学期学生开设。
                    本课程在学生已掌握Python基础、数据采集与处理、商务数据分析与应用基础等前置课程的基础上，
                    进一步培养学生运用数据分析技术解决实际商务问题的能力。
                  </p>
                  <p>
                    课程通过理论与实践相结合的方式，使学生掌握数据分析的基本流程、方法和工具，
                    能够运用Python进行数据处理、统计分析、数据可视化，并具备数据驱动决策的能力。
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">课程目标</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>掌握数据分析的基本概念、流程和方法</li>
                      <li>熟练运用Python进行数据处理和分析</li>
                      <li>能够使用数据可视化工具展示分析结果</li>
                      <li>具备运用数据分析解决商务问题的能力</li>
                      <li>培养数据驱动决策的思维方式</li>
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
                  {/* Week 1 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第1周：数据分析概述</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据分析的定义、作用和应用领域</li>
                      <li>数据分析的基本流程和方法</li>
                      <li>数据分析工具介绍</li>
                      <li>案例分析：电商平台用户行为分析</li>
                    </ul>
                  </div>

                  {/* Week 2 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第2周：数据预处理</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据清洗与整理</li>
                      <li>数据转换与标准化</li>
                      <li>缺失值处理</li>
                      <li>异常值检测与处理</li>
                    </ul>
                  </div>

                  {/* Week 3 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第3-4周：描述性统计分析</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>集中趋势分析（均值、中位数、众数）</li>
                      <li>离散程度分析（方差、标准差、四分位数）</li>
                      <li>分布特征分析</li>
                      <li>Python实现：使用numpy和pandas进行统计分析</li>
                    </ul>
                  </div>

                  {/* Week 5-6 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第5-6周：数据可视化</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据可视化原则与方法</li>
                      <li>Matplotlib库使用</li>
                      <li>Seaborn库使用</li>
                      <li>交互式可视化工具介绍</li>
                    </ul>
                  </div>

                  {/* Week 7-8 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第7-8周：预测分析</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>线性回归分析</li>
                      <li>时间序列分析</li>
                      <li>Python实现：使用scikit-learn进行预测</li>
                    </ul>
                  </div>

                  {/* Week 9-10 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第9-10周：分类分析</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>决策树算法</li>
                      <li>随机森林算法</li>
                      <li>分类模型评估</li>
                    </ul>
                  </div>

                  {/* Week 11-12 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第11-12周：聚类分析</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>K-means聚类算法</li>
                      <li>层次聚类算法</li>
                      <li>聚类结果分析与应用</li>
                    </ul>
                  </div>

                  {/* Week 13-14 */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第13-14周：文本分析</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>文本预处理技术</li>
                      <li>词频分析与情感分析</li>
                      <li>Python实现：使用NLTK或spaCy进行文本分析</li>
                    </ul>
                  </div>

                  {/* Week 15-16 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第15-16周：综合项目实践</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>企业真实数据集分析</li>
                      <li>数据分析报告撰写</li>
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
                    <h3 className="font-semibold text-gray-800 mb-2">理论教学</h3>
                    <p>通过课堂讲授、案例分析等方式，讲解数据分析的基本概念、方法和理论知识。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">实践教学</h3>
                    <p>通过实验室操作、编程练习、项目实践等方式，让学生掌握数据分析工具的使用和实际应用能力。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">翻转课堂</h3>
                    <p>学生课前通过在线资源学习理论知识，课堂上进行讨论、实践和问题解决。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目驱动</h3>
                    <p>以真实商务案例为基础，通过项目实践培养学生的综合分析能力和解决实际问题的能力。</p>
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
                      <li>项目方案设计：10%</li>
                      <li>项目实施与代码：10%</li>
                      <li>项目报告与展示：10%</li>
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