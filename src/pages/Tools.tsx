import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Megaphone, Share2, Video, FileOutput } from 'lucide-react';

const tools = [
  {
    icon: Megaphone,
    name: 'Marketing Campaigns',
    description: 'Create hyper-personalized marketing campaigns, ad copies, and email sequences.',
    path: '/tools/marketing',
    color: 'blue',
  },
  {
    icon: FileText,
    name: 'Long-form Content',
    description: 'Generate in-depth articles and blog posts optimized for engagement.',
    path: '/tools/long-form',
    color: 'green',
  },
  {
    icon: Share2,
    name: 'Social Media Posts',
    description: 'Create engaging social media content with optimized hashtags.',
    path: '/tools/social-media',
    color: 'purple',
  },
  {
    icon: Video,
    name: 'YouTube Content',
    description: 'Generate video ideas and scripts based on your content strategy.',
    path: '/tools/youtube',
    color: 'red',
  },
  {
    icon: FileOutput,
    name: 'Document Generator',
    description: 'Create professional documents, proposals, and more with AI assistance.',
    path: '/tools/documents',
    color: 'orange',
  },
];

export function Tools() {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const classes = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      red: 'bg-red-50 text-red-600 hover:bg-red-100',
      orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
    };
    return classes[color as keyof typeof classes] || classes.blue;
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Content Tools</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our suite of AI-powered content creation tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.name}
                onClick={() => navigate(tool.path)}
                className="flex flex-col text-left p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className={`p-3 rounded-lg w-fit ${getColorClasses(tool.color)}`}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {tool.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {tool.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}