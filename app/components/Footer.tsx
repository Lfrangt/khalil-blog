import Link from 'next/link';
import SocialIcon from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-gradient">
                Khalil
              </span>
            </Link>
            <p className="mt-4 text-foreground/70 max-w-xs">
              计算机科学专业学生，热爱编程和创新科技，同时也是音乐爱好者。
            </p>
            
            {/* 社交媒体图标 */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/lfrangt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <SocialIcon type="github" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.douyin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="抖音"
              >
                <SocialIcon type="douyin" className="w-6 h-6" />
              </a>
              <a 
                href="mailto:lfrangt.com@gmail.com" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <SocialIcon type="email" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">首页</Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">博客</Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/70 hover:text-foreground transition-colors">项目</Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">关于我</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">兴趣爱好</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                <span className="text-primary">🎸</span> 音乐 - 电吉他 & 钢琴
              </li>
              <li className="text-foreground/70">
                <span className="text-primary">🎬</span> 电影 - 法国新浪潮
              </li>
              <li className="text-foreground/70">
                <span className="text-primary">💻</span> 编程 - Web开发 & AI
              </li>
              <li className="text-foreground/70">
                <span className="text-primary">📈</span> 投资 - 价值投资
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <SocialIcon type="email" className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-foreground/70">lfrangt.com@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-foreground/70">Vancouver, Canada</span>
              </li>
              <li className="flex items-start">
                <SocialIcon type="wechat" className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-foreground/70">微信: Khalil6669</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-foreground/60">
          <p>© {currentYear} Khalil. All rights reserved.</p>
          <p className="mt-1 text-sm">
            使用 Next.js, TypeScript, 和 Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 