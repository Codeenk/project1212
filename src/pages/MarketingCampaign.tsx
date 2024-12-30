import React, { useState } from 'react';
import { Megaphone } from 'lucide-react';
import { CampaignForm } from '../components/marketing/CampaignForm';
import { ResultCard } from '../components/shared/ResultCard';
import { generateCampaignContent } from '../lib/marketing';

export function MarketingCampaign() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const content = await generateCampaignContent(data);
      setResult(content);
    } catch (error) {
      console.error('Error generating campaign:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Megaphone className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Marketing Campaign Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create hyper-personalized marketing campaigns tailored to your target audience
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <CampaignForm onSubmit={handleSubmit} loading={loading} />
        </div>

        {result && (
          <div className="mt-8">
            <ResultCard
              title="Generated Campaign"
              content={result}
              onCopy={() => navigator.clipboard.writeText(result)}
            />
          </div>
        )}
      </div>
    </div>
  );
}