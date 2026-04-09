import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      name: 'Python基础',
      description: '学习Python编程语言的基本语法和应用',
      category: '编程基础'
    },
    {
      id: 2,
      name: '数据分析技术',
      description: '掌握数据分析的基本方法和工具',
      category: '核心课程'
    },
    {
      id: 3,
      name: '数据采集与处理',
      description: '学习数据采集、清洗和预处理技术',
      category: '核心课程'
    },
    {
      id: 4,
      name: '供应链数据分析',
      description: '运用数据分析技术优化供应链管理',
      category: '专业课程'
    },
    {
      id: 5,
      name: '数据库原理与应用',
      description: '学习数据库设计和SQL查询技术',
      category: '核心课程'
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const categories = ['all', ...Array.from(new Set(courses.map(course => course.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">李乐怡</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">关于我</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">课程</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">联系方式</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">李乐怡</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">广东科学技术职业学院</p>
            <p className="text-lg md:text-xl text-gray-700 mb-8">商学院 · 商务数据分析与应用专业</p>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            <p className="text-gray-600 max-w-2xl">
              我是一名商务数据分析与应用专业的学生，热爱数据分析和编程。
              希望通过这个页面展示我的学习成果和课程信息，与大家分享我的学习经历。
            </p>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="courses" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我的课程</h2>
            <p className="text-gray-600">以下是我学习的主要课程，后续会补充详细内容</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? '全部课程' : category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-semibold">{course.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      查看详情 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系方式</h2>
            <p className="text-gray-600">如果您有任何问题或建议，欢迎联系我</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">邮箱</p>
                    <p className="text-gray-900">example@mail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">电话</p>
                    <p className="text-gray-900">123-4567-8910</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">地址</p>
                    <p className="text-gray-900">广东省珠海市金湾区</p>
                  </div>
                </div>
              </div>
            </div>
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