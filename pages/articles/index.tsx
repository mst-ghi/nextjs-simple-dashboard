import { useAllArticles } from '@shared/queries';
import { IArticle } from 'interfaces';
import React from 'react';

const Article = () => {
    let articles: IArticle[] = [];
    const { data } = useAllArticles();
    if (data) {
        articles = data.data.data;
    }

    const limitDesc = (desc: string) => {
        return desc.slice(0, 120) + (desc.length > 120 ? '...' : '');
    };

    return (
        <div className="flex flex-wrap -mt-3">
            {articles.map((article, idx) => {
                return (
                    <div key={idx + 'article'} className="p-2 w-1/4">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={article.image}
                                alt="Mountain"
                                onError={(e: any) => {
                                    e.target.onerror = null;
                                    e.target.src = '/img/tailwind.png';
                                }}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {article.title}
                                </div>
                                <p className="text-gray-700 text-base">
                                    {limitDesc(article.description)}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #read more
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Article;
