import { useState } from 'react';

export default function DatabaseCourse() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="/" className="hover:text-cyan-600 transition-colors">李乐怡</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">首页</a>
            <a href="/#courses" className="text-gray-600 hover:text-cyan-600 transition-colors">课程</a>
            <a href="/#contact" className="text-gray-600 hover:text-cyan-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <section className="pt-32 pb-16 px-4 bg-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col">
            <a href="/" className="text-white hover:text-cyan-100 transition-colors mb-4 inline-flex items-center">
              <span className="mr-2">←</span> 返回首页
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">数据库原理与应用</h1>
            <p className="text-xl text-cyan-100 mb-6">商务数据分析与应用专业 · 高职大一第二学期</p>
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
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              课程概述
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'syllabus'
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              课程大纲
            </button>
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'teaching'
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              教学方法
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'assessment'
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-gray-600 hover:text-cyan-600'
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
                    《数据库原理与应用》是商务数据分析与应用专业的核心课程，面向高职大一第二学期学生开设。
                    本课程培养学生的数据库设计、管理和应用能力，为后续的数据分析、数据采集等课程提供坚实的数据管理基础。
                  </p>
                  <p>
                    课程通过理论与实践相结合的方式，使学生掌握数据库系统的基本原理、SQL查询语言、数据库设计方法，
                    能够运用数据库技术解决实际商务数据管理问题。
                  </p>
                  <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-800 mb-2">课程目标</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>理解数据库系统的基本概念和原理</li>
                      <li>熟练掌握SQL查询语言</li>
                      <li>掌握数据库设计方法（ER图、范式）</li>
                      <li>具备数据库管理和维护能力</li>
                      <li>为数据分析提供数据管理支持</li>
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第1-2周：数据库基础</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>数据库系统概述</li>
                      <li>数据模型与数据库结构</li>
                      <li>关系数据库基本概念</li>
                      <li>MySQL数据库安装与配置</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第3-4周：SQL基础查询</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>SELECT语句基础</li>
                      <li>WHERE条件查询</li>
                      <li>ORDER BY排序</li>
                      <li>LIMIT分页查询</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第5-6周：SQL高级查询</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>聚合函数（COUNT、SUM、AVG等）</li>
                      <li>GROUP BY分组查询</li>
                      <li>JOIN多表连接查询</li>
                      <li>子查询与嵌套查询</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第7-8周：数据库操作</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>INSERT插入数据</li>
                      <li>UPDATE更新数据</li>
                      <li>DELETE删除数据</li>
                      <li>事务处理与ACID特性</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第9-10周：数据库设计</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>ER实体关系图</li>
                      <li>关系数据库设计</li>
                      <li>数据库范式（1NF、2NF、3NF）</li>
                      <li>索引设计与优化</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第11-12周：视图与存储过程</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>视图的创建与使用</li>
                      <li>存储过程与函数</li>
                      <li>触发器的应用</li>
                      <li>数据库安全性与权限管理</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第13-14周：Python连接数据库</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python数据库连接（pymysql、SQLAlchemy）</li>
                      <li>Python执行SQL查询</li>
                      <li>数据库与数据分析集成</li>
                      <li>综合项目实践</li>
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
                    <p>通过课堂讲授，讲解数据库原理、SQL语法、数据库设计等理论知识。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">实践教学</h3>
                    <p>通过大量的SQL练习和数据库设计实践，巩固理论知识，培养实际操作能力。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目驱动</h3>
                    <p>以商务数据库设计项目为载体，让学生在项目中学习和应用数据库技术。</p>
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
                    <h3 className="font-semibold text-gray-800 mb-2">平时成绩（50%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>课堂参与：10%</li>
                      <li>SQL作业：20%</li>
                      <li>实验报告：20%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目成绩（20%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>数据库设计：10%</li>
                      <li>项目实现：10%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">期末考试（30%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>理论知识：15%</li>
                      <li>SQL操作：15%</li>
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