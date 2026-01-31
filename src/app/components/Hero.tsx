import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 oriental-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              探索神秘的东方玄学
            </h1>
            <p className="text-lg md:text-xl mb-8 text-text">
              结合传统智慧与现代需求，为您提供专业的玄学服务，
              帮助您在生活、事业、感情等方面获得指引。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
              >
                浏览服务
              </a>
              <a 
                href="#contact" 
                className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
              >
                立即咨询
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="oriental-border rounded-xl p-1">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=oriental%20mystical%20scene%20with%20traditional%20chinese%20elements%2C%20feng%20shui%2C%20tarot%20cards%2C%20crystals%2C%20soft%20lighting%2C%20mysterious%20atmosphere%2C%20high%20quality%20photography&image_size=landscape_16_9" 
                alt="东方玄学" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
