import{_ as a,c as n,o as s,a as e}from"./app.c86909e0.js";const g='{"title":"You can create CatalogItem","description":"","frontmatter":{},"headers":[{"level":2,"title":"You can create CatalogItem","slug":"you-can-create-catalogitem"}],"relativePath":"guide/catalog-item.md","lastUpdated":1642727708610}',t={},o=e(`<h2 id="you-can-create-catalogitem" tabindex="-1">You can create CatalogItem <a class="header-anchor" href="#you-can-create-catalogitem" aria-hidden="true">#</a></h2><p>When a custom flow is defined is possible to make requests to it with the UsingCatalog class</p><p>See <a href="https://docs.servicenow.com/bundle/orlando-it-service-management/page/product/service-catalog-management/task/t_DefineACatalogItem.html" target="_blank" rel="noopener noreferrer">Service Now Docs</a> to learn more</p><ul><li>You must first create an application in studio inside ServiceNow and then: <ul><li>Create a catalogItem</li><li>create a flow</li></ul></li></ul><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> requestCatalog <span class="token operator">=</span> serviceNow<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UsingCatalog</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Request<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Guid</span><span class="token punctuation">(</span><span class="token string">&quot;catalogItemIdHere&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> <span class="token keyword">await</span> requestCatalog<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">{</span>
    varNameHereString <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    varNameHereNumber <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    varNameHereReference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Guid</span><span class="token punctuation">(</span>sys_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">;</span>
</code></pre></div>`,5),c=[o];function p(l,r,i,u,k,d){return s(),n("div",null,c)}var _=a(t,[["render",p]]);export{g as __pageData,_ as default};
