import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcon from '../components/SocialIcons';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        {/* 头部 */}
        <div className="relative py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              关于我
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              了解更多关于我的背景、技能和兴趣爱好
            </p>
          </div>
        </div>
        
        {/* 主要内容 */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* 个人简介 */}
            <section className="mb-16">
              <div className="prose lg:prose-xl mx-auto dark:prose-invert">
                <h2 className="font-heading">个人简介</h2>
                <p>
                  你好！我是 Khalil，一名热爱编程和创新的计算机科学专业学生，即将就读于加拿大兰加拉学院。
                  我来自中国温州，对技术和艺术充满热情。
                </p>
                <p>
                  作为一名计算机科学学生，我热衷于探索最新的技术潮流，特别是 Web 开发、区块链技术和 AI Agent 领域。
                  我始终保持着对知识的渴望，不断学习新技能，拓展自己的技术栈。
                </p>
                <p>
                  除了编程，我还是一名音乐爱好者，擅长电吉他和钢琴。音乐是我表达情感和放松的方式，
                  我特别喜欢 R&B、Neo Soul、Funk、爵士和蓝调布鲁斯风格的音乐。
                </p>
              </div>
            </section>
            
            {/* 教育经历 */}
            <section className="mb-16">
              <h2 className="font-heading text-2xl font-semibold mb-6">教育经历</h2>
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="font-semibold text-xl">兰加拉学院 (Langara College)</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">即将就读</span>
                </div>
                <p className="text-foreground/70 mb-2">计算机科学专业</p>
                <p className="text-foreground/60 text-sm">温哥华，加拿大</p>
              </div>
            </section>
            
            {/* 兴趣爱好 */}
            <section className="mb-16">
              <h2 className="font-heading text-2xl font-semibold mb-6">兴趣爱好</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <InterestCard 
                  title="音乐" 
                  emoji="🎸" 
                  description="电吉他 & 钢琴、R&B / Neo Soul / Funk、爵士 & 蓝调布鲁斯"
                />
                <InterestCard 
                  title="电影" 
                  emoji="🎬" 
                  description="法国新浪潮、经典歌舞剧、哲学浪漫爱情"
                />
                <InterestCard 
                  title="计算机" 
                  emoji="💻" 
                  description="Web 开发 & 区块链、AI Agent 探索"
                />
                <InterestCard 
                  title="投资" 
                  emoji="📈" 
                  description="价值投资、长期持有、坚持复利"
                />
              </div>
            </section>
            
            {/* 联系方式 */}
            <section>
              <h2 className="font-heading text-2xl font-semibold mb-6">联系我</h2>
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="grid gap-4 md:grid-cols-2">
                  <ContactItem 
                    icon="email" 
                    label="Email" 
                    value="lfrangt.com@gmail.com" 
                    href="mailto:lfrangt.com@gmail.com"
                  />
                  <ContactItem 
                    icon="wechat" 
                    label="微信" 
                    value="Khalil6669" 
                  />
                  <div className="md:col-span-2">
                    <ContactItem 
                      icon="github" 
                      label="GitHub" 
                      value="github.com/lfrangt" 
                      href="https://github.com/lfrangt"
                    />
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/20 flex justify-center">
                  <a 
                    href="https://github.com/lfrangt" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 mx-2 flex items-center justify-center rounded-full bg-card hover:bg-card/80 transition-colors border border-border"
                  >
                    <SocialIcon type="github" className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.douyin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 mx-2 flex items-center justify-center rounded-full bg-card hover:bg-card/80 transition-colors border border-border"
                  >
                    <SocialIcon type="douyin" className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:lfrangt.com@gmail.com" 
                    className="w-10 h-10 mx-2 flex items-center justify-center rounded-full bg-card hover:bg-card/80 transition-colors border border-border"
                  >
                    <SocialIcon type="email" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

interface InterestCardProps {
  title: string;
  emoji: string;
  description: string;
}

function InterestCard({ title, emoji, description }: InterestCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{emoji}</span>
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}

interface ContactItemProps {
  icon: 'github' | 'douyin' | 'wechat' | 'email' | 'twitter';
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-background/50 transition-colors">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
        <SocialIcon type={icon} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-foreground/60">{label}</p>
        {href ? (
          <a 
            href={href} 
            target="_blank" 
            rel="noreferrer" 
            className="font-medium hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </div>
  );
} 