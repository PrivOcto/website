# LocalAI Agent — SEO-Optimized Blog Post Template (Updated)

## 📝 完整模板（包含所有流量增长字段）

```markdown
---
# 基础信息
publishDate: 2026-03-15
updateDate: 2026-03-15           # 重要！Google 喜欢新鲜内容
author: Your Name
title: "[Target Keyword]: [Benefit/Outcome]"
excerpt: "[150-160 character description with target keyword and CTA]"
image: "~/assets/images/blog/[post-slug].webp"
category: [Primary Category]
tags:
  - [Tag 1]
  - [Tag 2]
  - [Tag 3]

# SEO 增强字段
keywords:
  - [Primary Keyword]
  - [Secondary Keyword]
  - [LSI Keyword]
readingTime: 8                   # 阅读时间（分钟）

# 社交分享优化
twitterImage: "~/assets/images/blog/[slug]-twitter.webp"  # Twitter: 1200x600
ogImage: "~/assets/images/blog/[slug]-og.webp"            # OG: 1200x630

# 流量增长字段
featured: true                   # 精选文章
trending: false                  # 热门趋势
priority: 0.9                    # URL 优先级 (0-1)
relatedPosts:                    # 相关文章 slug
  - related-post-1
  - related-post-2

# SEO Metadata
metadata:
  canonical: https://localaiagent.tech/blog/[post-slug]
  robots:
    index: true
    follow: true
  openGraph:
    url: https://localaiagent.tech/blog/[post-slug]
    siteName: LocalAI Agent
    images:
      - url: ~/assets/images/blog/[post-slug].webp
        width: 1200
        height: 630
        alt: [Description with keyword]
    locale: en_US
    type: article
  twitter:
    handle: "@localai67177"
    site: "@localai67177"
    cardType: summary_large_image
---

<StructuredData type="article" article={structuredData} />
```

---

## 📖 字段说明

### 必填字段
| 字段 | 说明 | 示例 |
|------|------|------|
| `publishDate` | 发布日期 | `2026-03-15` |
| `title` | 标题（50-60 字符，关键词前置） | `"Local AI Deployment: 5 Steps to 70% Faster Inference"` |
| `excerpt` | Meta description（150-160 字符） | `"Learn how to deploy AI models locally in 5 steps..."` |
| `image` | Featured image（1200×675px） | `"~/assets/images/blog/local-ai-guide.webp"` |
| `category` | 分类 | `Tutorials` |
| `tags` | 标签（3-5 个） | `["AI", "Local Deployment"]` |

### 流量增长字段（推荐）
| 字段 | 作用 | 建议值 |
|------|------|--------|
| `keywords` | 目标关键词 | 3-5 个相关词 |
| `readingTime` | 阅读时间 | 5-15 分钟 |
| `featured` | 精选文章 | `true`（重要文章） |
| `priority` | URL 优先级 | `0.8-1.0`（重要文章） |
| `relatedPosts` | 内部链接 | 2-4 个相关 slug |

---

## ✅ 快速检查清单

- [ ] 标题包含关键词（前置）
- [ ] Meta description 150-160 字符
- [ ] Featured image 1200×675px
- [ ] 3-5 个 tags
- [ ] keywords 字段填写
- [ ] relatedPosts 设置内部链接

---

*完整指南请查看：`BLOG_METADATA_GUIDE.md`*
