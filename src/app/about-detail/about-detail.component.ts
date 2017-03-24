/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

@Component({
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent {

  // 服务优势
  public serviceAdvant = {
    title: '服务优势',
    content: '悦云科技是一家提供高品质移动应用解决方案提供商，专注于移动互联网领域的发展与创新，我们已为全国多家知名企业提供了相应的技术解决方案，并树立了良好的口碑，积累了丰富的经验和成功案例，我们的专业研发流程以及良好的售后服务质量亦赢得客户的广泛认可，持续帮助企业实现卓越的业务成果。 移动互联网是当下互联网发展的大趋势，手机应用成为众多企业关注的热点，商侣科技通过将设计创新、产品研发与已有的传统标准流程相结合的方式，成功帮助客户部署了移动应用并在市场拓展、品牌传播方面取得了巨大成效。'
  };

  // 专业团队
  public teamExplainList = [
    {
      title: '专业策划',
      content: '悦云设有专业的网站策划部，通过PM（项目经理）理解客户的商业需求后，与网站策划人员共同策划方案，确保为客户提供最优秀、独特、充分且经济的网站建设方案。'
    },
    {
      title: '视觉设计',
      content: '悦云拥有多名优秀的美工设计师，在视觉设计方面，我们也许是最肯下工夫的团队，在策划阶段，设计人员即参与规划，甄选国外优秀精品网站作为参考对象，设计阶段，亦能媲美并超越国外精品网站水平。'
    },
    {
      title: '功能开发',
      content: '悦云相信，个性化、多样化的网站功能才是帮助客户实现商业目的的有力渠道，而悦云具有丰富编程开发经验的开发人员，保障了您独特的业务需求均能满足。'
    },
    {
      title: '推广运营',
      content: '悦云并非单纯的建站公司，我们的口号是"您的电商伴侣"，因此，后期服务也是我们的优势之一。我们为客户提供包括网站基础维护服务、SEO营销推广服务以及整站综合运营服务，确保您的网站在建站后具有生命力与竞争力。'
    },
    {
      title: '品质监控',
      content: '悦云拥有卓越的管理团队，核心管理人员均出自华为、微软、宝洁等知名企业。同时，悦云建立了完整的网站品质监控流程，在每一个细节上为客户保障优秀的网站品质'
    }
  ];

  // 专业流程
  public processExplain = {
    content: '为了更好的服务于客户，持续提高解决方案的的创新性及品质感，我们构建了清晰、可视、可持续改进的研发流程，我们的研发流程涉及市场分析、产品定位、用户分析、系统设计、程序开发、性能优化等，在每个环节我们都秉承着打造高品质移动互联网解决方案的开发理念。无论您是想更贴近客户，传递身临其境的品牌体验，还是想加速创新、提高流程效率、降低成本，悦云都能通过专业的研发流程为你提供定制化解决方案实现你期望的成果。'
  }

  // 合作伙伴
  public partnerExplain = {
    'content': '我们与国内外多家知名企业合作打造高品质的互联网产品，帮助他们为用户提供更优质的服务。我们按照不同行业、不同类型客户的需求特点，总结、提炼各类优秀项目案例，形成了悦云信息科技公司特有的移动应用解决方案。专业化流程、优质的服务、丰富的经验以及对创意品质的追求是客户选择我们的理由。'
  }
}
