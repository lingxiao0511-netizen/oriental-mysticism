import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image, price }) => {
  return (
    <div className="oriental-card">
      <div className="oriental-border rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
      <p className="text-text mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-secondary">{price}</span>
        <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-lg transition-colors">
          选择服务
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: '风水布局咨询',
      description: '专业风水师为您的住宅或办公空间提供布局建议，改善气场，提升运势。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=feng%20shui%20consultation%20room%20with%20traditional%20chinese%20elements%2C%20compass%2C%20feng%20shui%20items%2C%20harmonious%20space%2C%20professional%20setting&image_size=square',
      price: '$99',
    },
    {
      title: '命理分析',
      description: '基于生辰八字，为您分析性格、事业、感情等方面的发展趋势和潜在机遇。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20astrology%20reading%20with%20birth%20chart%2C%20traditional%20chinese%20calendar%2C%20fortune%20telling%20tools%2C%20mystical%20atmosphere&image_size=square',
      price: '$149',
    },
    {
      title: '塔罗牌占卜',
      description: '通过塔罗牌为您提供生活、事业、感情等方面的指引和建议。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tarot%20card%20reading%20session%2C%20tarot%20cards%20spread%20on%20table%2C%20mystical%20lighting%2C%20oriental%20influences%2C%20professional%20setting&image_size=square',
      price: '$79',
    },
    {
      title: '水晶能量疗愈',
      description: '利用天然水晶的能量，为您平衡身心，消除负面能量，提升整体运势。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crystal%20healing%20session%2C%20various%20crystals%20arranged%20on%20table%2C%20soft%20lighting%2C%20peaceful%20atmosphere%2C%20oriental%20elements&image_size=square',
      price: '$129',
    },
    {
      title: '姓名分析',
      description: '基于姓名学原理，为您分析姓名对运势的影响，并提供改名建议。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20name%20analysis%20with%20calligraphy%2C%20traditional%20chinese%20characters%2C%20mystical%20atmosphere%2C%20professional%20setting&image_size=square',
      price: '$69',
    },
    {
      title: '择吉日',
      description: '为重要事件（如婚礼、开业、搬家等）选择吉祥日期，提升成功率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20calendar%20with%20auspicious%20dates%2C%20traditional%20chinese%20elements%2C%20red%20envelopes%2C%20lucky%20symbols%2C%20mystical%20atmosphere&image_size=square',
      price: '$49',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">我们的服务</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            提供专业的玄学服务，帮助您在各个方面获得指引和支持
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              image={service.image} 
              price={service.price} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
