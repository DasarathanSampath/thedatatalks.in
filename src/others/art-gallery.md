---
date: 22 May 2021
id: 'art-gallery'
title: 'Art Gallery'
desc: Collection of arts - pencil sketching, water colors, paintings and art works
imgDesc: A pencil sketch from one of the contributor
author: "Group"
altLang: false
articleLang: 'en-US'
isHome: false
topic: others
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

<DynamicGlobalComponent componentName="ArtGallery" />
        