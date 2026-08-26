import React, { useState } from 'react';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockData';

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">CrowdInnov Insights</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Open Innovation Blog & Case Studies</h1>
        <p className="text-slate-600 text-sm">Best practices, legal frameworks, and winner stories from the crowdsourcing frontier.</p>
      </div>

      {selectedPost ? (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6 max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-xs font-semibold text-brand-navy hover:underline"
          >
            ← Back to all articles
          </button>
          <span className="text-xs font-bold bg-sky-50 text-sky-700 px-2.5 py-1 rounded">
            {selectedPost.category}
          </span>
          <h2 className="text-3xl font-bold text-slate-900">{selectedPost.title}</h2>
          <div className="flex items-center gap-4 text-xs text-slate-500 border-y border-slate-100 py-3">
            <span>By {selectedPost.author}</span>
            <span>•</span>
            <span>{selectedPost.date}</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{selectedPost.content}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((bp) => (
            <div
              key={bp.id}
              onClick={() => setSelectedPost(bp)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                  {bp.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition">
                  {bp.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {bp.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                <span>{bp.date}</span>
                <span className="text-brand-navy font-bold flex items-center gap-1 group-hover:translate-x-1 transition">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const BlogPageComponent = BlogPage;
export default BlogPage;
