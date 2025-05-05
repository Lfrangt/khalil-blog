'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SocialIcon from './SocialIcons';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      
      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* 背景图形 */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 左侧文本 */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="block">你好，我是</span>
            <span className="text-gradient animate-gradient-x">Khalil</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-6 max-w-lg mx-auto md:mx-0 opacity-80">
            计算机科学专业学生，来自中国温州。热爱编程和创新科技，同时也是音乐爱好者，擅长电吉他和钢琴。
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/blog" 
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary transition-all shadow-lg"
            >
              阅读博客
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 rounded-lg bg-transparent border border-foreground hover:border-foreground transition-all opacity-20 hover:opacity-40"
            >
              了解更多
            </Link>
          </div>
          
          {/* 社交媒体链接 */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <SocialMediaLink href="https://github.com/lfrangt" type="github" label="GitHub" />
            <SocialMediaLink href="https://www.douyin.com" type="douyin" label="抖音: jipuqiqoge" />
            <SocialMediaLink href="https://weixin.qq.com" type="wechat" label="微信: Khalil6669" />
          </div>
        </div>
        
        {/* 右侧图片/动画元素 */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div 
            ref={parallaxRef}
            className="relative z-10 transition-transform duration-200 ease-out"
          >
            {/* 背景形状 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-10"></div>
            
            {/* 主图片 */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-background shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">K</div>
            </div>
            
            {/* 悬浮标签 */}
            <div className="absolute -top-4 -right-4 py-2 px-4 bg-card rounded-full shadow-lg animate-float">
              <span className="text-sm font-medium">Web 开发者</span>
            </div>
            <div className="absolute -bottom-4 -left-4 py-2 px-4 bg-card rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <span className="text-sm font-medium">音乐爱好者</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialMediaLinkProps {
  href: string;
  type: 'github' | 'douyin' | 'wechat' | 'email' | 'twitter';
  label: string;
}

const SocialMediaLink = ({ href, type, label }: SocialMediaLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-card transition-colors group"
      aria-label={label}
      title={label}
    >
      <span className="sr-only">{label}</span>
      <SocialIcon type={type} className="w-5 h-5 text-foreground group-hover:text-foreground" />
    </a>
  );
};

export default Hero; 