import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑，比如发送邮件或保存到数据库
    console.log('Form submitted:', formData);
    // 重置表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    // 显示成功消息
    alert('咨询提交成功，我们会尽快与您联系！');
  };

  return (
    <section id="contact" className="py-20 oriental-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">联系我们</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            如有任何问题或需求，欢迎随时咨询我们
          </p>
        </div>
        <div className="max-w-3xl mx-auto oriental-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-text font-medium mb-2">电话</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-text font-medium mb-2">咨询服务</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">请选择服务类型</option>
                  <option value="fengshui">风水布局咨询</option>
                  <option value="mingli">命理分析</option>
                  <option value="tarot">塔罗牌占卜</option>
                  <option value="crystal">水晶能量疗愈</option>
                  <option value="name">姓名分析</option>
                  <option value="date">择吉日</option>
                  <option value="other">其他咨询</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-text font-medium mb-2">咨询内容</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              提交咨询
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
