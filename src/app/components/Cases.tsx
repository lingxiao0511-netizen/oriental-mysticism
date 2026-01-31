import React from 'react';

interface CaseProps {
  title: string;
  description: string;
  image: string;
  result: string;
}

const CaseCard: React.FC<CaseProps> = ({ title, description, image, result }) => {
  return (
    <div className="oriental-card">
      <div className="oriental-border rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
      <p className="text-text mb-4">{description}</p>
      <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
        <h4 className="font-bold text-secondary mb-1">调理结果：</h4>
        <p className="text-text">{result}</p>
      </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const cases: CaseProps[] = [
    {
      title: '办公室风水调整',
      description: '某公司办公室布局不合理，导致员工士气低落，业绩下滑。通过风水调整，改善了空间气场。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20space%20with%20feng%20shui%20elements%2C%20plants%2C%20harmonious%20layout%2C%20professional%20atmosphere&image_size=square',
      result: '员工工作积极性提高，团队凝聚力增强，三个月内业绩提升30%。',
    },
    {
      title: '住宅风水改善',
      description: '某家庭运势低迷，成员健康问题频发。通过调整住宅风水布局，改善了居住环境。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=harmonious%20home%20interior%20with%20feng%20shui%20elements%2C%20plants%2C%20natural%20light%2C%20peaceful%20atmosphere&image_size=square',
      result: '家庭成员健康状况改善，财运增强，人际关系更加和谐。',
    },
    {
      title: '命理指导职业规划',
      description: '某客户对职业发展感到迷茫，通过命理分析，找到了适合自己的职业方向。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20analyzing%20career%20options%2C%20professional%20setting%2C%20chinese%20astrology%20elements%2C%20mystical%20atmosphere&image_size=square',
      result: '客户成功转型到适合的行业，职业发展顺利，收入大幅增加。',
    },
    {
      title: '感情问题塔罗指导',
      description: '某客户面临感情困扰，通过塔罗牌占卜，获得了清晰的指引。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tarot%20cards%20spread%20for%20relationship%20advice%2C%20mystical%20lighting%2C%20emotional%20atmosphere%2C%20oriental%20elements&image_size=square',
      result: '客户明确了感情方向，成功解决了关系中的问题，感情更加稳定。',
    },
    {
      title: '水晶疗愈情绪问题',
      description: '某客户长期情绪低落，通过水晶能量疗愈，改善了心理状态。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20receiving%20crystal%20healing%2C%20crystals%20arranged%20around%2C%20peaceful%20atmosphere%2C%20soft%20lighting&image_size=square',
      result: '客户情绪逐渐稳定，自信心增强，生活态度更加积极乐观。',
    },
    {
      title: '开店择吉日',
      description: '某创业者计划开店，通过择吉日服务，选择了最适合的开业时间。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=new%20business%20opening%20ceremony%2C%20traditional%20chinese%20elements%2C%20red%20decorations%2C%20lucky%20symbols%2C%20joyful%20atmosphere&image_size=square',
      result: '店铺开业后生意兴隆，客户络绎不绝，三个月内实现盈利。',
    },
  ];

  return (
    <section id="cases" className="py-20 oriental-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">成功案例</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            真实客户案例，展示玄学服务如何帮助人们改善生活和运势
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index} 
              title={caseItem.title} 
              description={caseItem.description} 
              image={caseItem.image} 
              result={caseItem.result} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
