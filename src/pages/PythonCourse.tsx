import { useState } from 'react';

export default function PythonCourse() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="/" className="hover:text-green-600 transition-colors">李乐怡</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">首页</a>
            <a href="/#courses" className="text-gray-600 hover:text-green-600 transition-colors">课程</a>
            <a href="/#contact" className="text-gray-600 hover:text-green-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <section className="pt-32 pb-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col">
            <a href="/" className="text-white hover:text-green-100 transition-colors mb-4 inline-flex items-center">
              <span className="mr-2">←</span> 返回首页
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Python基础</h1>
            <p className="text-xl text-green-100 mb-6">商务数据分析与应用专业 · 高职大一第二学期</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">编程基础</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">64课时</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">4学分</span>
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
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              课程概述
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'syllabus'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              课程大纲
            </button>
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'teaching'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              教学方法
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                activeTab === 'assessment'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
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
                    《Python基础》是商务数据分析与应用专业的入门编程课程，面向高职大一第二学期学生开设。
                    本课程培养学生的编程思维，使其掌握Python语言的基本语法和应用开发能力，
                    为后续的数据分析、数据采集等课程奠定坚实的基础。
                  </p>
                  <p>
                    课程通过理论与实践相结合的方式，注重培养学生的动手能力，
                    使学生能够运用Python解决实际问题，具备良好的编程习惯和代码规范。
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 mb-2">课程目标</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>掌握Python语言的基本语法和数据结构</li>
                      <li>具备程序设计和问题解决能力</li>
                      <li>掌握Python常用库的使用</li>
                      <li>培养良好的编程习惯和代码规范</li>
                      <li>为后续数据分析课程打下基础</li>
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第1-2周：Python入门</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python语言简介与安装</li>
                      <li>Python开发环境配置</li>
                      <li>第一个Python程序</li>
                      <li>变量与数据类型</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第3-4周：运算符与控制流程</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>算术运算符、比较运算符、逻辑运算符</li>
                      <li>条件语句（if-elif-else）</li>
                      <li>循环语句（for、while）</li>
                      <li>break与continue语句</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第5-6周：数据结构</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>列表（List）的创建与操作</li>
                      <li>元组（Tuple）的使用</li>
                      <li>字典（Dictionary）的应用</li>
                      <li>集合（Set）的基本操作</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第7-8周：函数</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>函数的定义与调用</li>
                      <li>参数传递与返回值</li>
                      <li>局部变量与全局变量</li>
                      <li>匿名函数与内置函数</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第9-10周：模块与包</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>模块的导入与使用</li>
                      <li>自定义模块的创建</li>
                      <li>包的结构与管理</li>
                      <li>常用标准库介绍</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第11-12周：文件操作</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>文件的打开与关闭</li>
                      <li>文件的读取与写入</li>
                      <li>文件指针操作</li>
                      <li>异常处理（try-except）</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第13-14周：面向对象编程</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>类与对象的定义</li>
                      <li>属性与方法</li>
                      <li>继承与多态</li>
                      <li>类的特殊方法</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">第15-16周：综合项目实践</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>项目需求分析与设计</li>
                      <li>项目实现与测试</li>
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
                    <p>通过生动有趣的案例，讲解Python编程的实际应用，激发学生的学习兴趣。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">实践教学</h3>
                    <p>每节课配备相应的编程练习，通过大量的实践操作巩固理论知识。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">问题驱动</h3>
                    <p>以问题为导向，引导学生思考和解决编程过程中遇到的困难。</p>
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
                      <li>作业完成：20%</li>
                      <li>实验报告：20%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">项目成绩（20%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>项目设计：10%</li>
                      <li>项目实现：10%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">期末考试（30%）</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>理论知识：15%</li>
                      <li>编程实践：15%</li>
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