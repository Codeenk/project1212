import React from 'react';
import { CampaignType, ContentTone, AudienceType } from '../../lib/marketing';
import { Button } from '../Button';

interface CampaignFormProps {
  onSubmit: (data: any) => Promise<void>;
  loading: boolean;
}

export function CampaignForm({ onSubmit, loading }: CampaignFormProps) {
  const [formData, setFormData] = React.useState({
    type: 'ad' as CampaignType,
    product: '',
    audience: {
      type: 'b2c' as AudienceType,
      demographics: '',
      interests: '',
      painPoints: '',
    },
    tone: 'professional' as ContentTone,
    goals: '',
    uniqueValue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Campaign Type
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as CampaignType })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="ad">Advertisement</option>
            <option value="email">Email Campaign</option>
            <option value="social">Social Media</option>
            <option value="landing">Landing Page</option>
          </select>
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">
            Product or Service
          </label>
          <input
            type="text"
            id="product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Target Audience</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="audienceType" className="block text-sm font-medium text-gray-700">
              Audience Type
            </label>
            <select
              id="audienceType"
              value={formData.audience.type}
              onChange={(e) => setFormData({
                ...formData,
                audience: { ...formData.audience, type: e.target.value as AudienceType }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="b2c">B2C</option>
              <option value="b2b">B2B</option>
              <option value="enterprise">Enterprise</option>
              <option value="startup">Startup</option>
              <option value="local">Local Business</option>
              <option value="global">Global Market</option>
            </select>
          </div>

          <div>
            <label htmlFor="demographics" className="block text-sm font-medium text-gray-700">
              Demographics
            </label>
            <input
              type="text"
              id="demographics"
              value={formData.audience.demographics}
              onChange={(e) => setFormData({
                ...formData,
                audience: { ...formData.audience, demographics: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Age, location, income level, etc."
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
              Interests & Behaviors
            </label>
            <textarea
              id="interests"
              value={formData.audience.interests}
              onChange={(e) => setFormData({
                ...formData,
                audience: { ...formData.audience, interests: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              placeholder="Hobbies, lifestyle, shopping habits, etc."
              required
            />
          </div>

          <div>
            <label htmlFor="painPoints" className="block text-sm font-medium text-gray-700">
              Pain Points
            </label>
            <textarea
              id="painPoints"
              value={formData.audience.painPoints}
              onChange={(e) => setFormData({
                ...formData,
                audience: { ...formData.audience, painPoints: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              placeholder="Challenges and problems they face"
              required
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
            Content Tone
          </label>
          <select
            id="tone"
            value={formData.tone}
            onChange={(e) => setFormData({ ...formData, tone: e.target.value as ContentTone })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="luxury">Luxury</option>
            <option value="friendly">Friendly</option>
            <option value="urgent">Urgent</option>
            <option value="educational">Educational</option>
          </select>
        </div>

        <div>
          <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
            Campaign Goals
          </label>
          <input
            type="text"
            id="goals"
            value={formData.goals}
            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Increase sales, build awareness, generate leads"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="uniqueValue" className="block text-sm font-medium text-gray-700">
          Unique Value Proposition
        </label>
        <textarea
          id="uniqueValue"
          value={formData.uniqueValue}
          onChange={(e) => setFormData({ ...formData, uniqueValue: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={2}
          placeholder="What makes your product/service unique?"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        isLoading={loading}
        loadingText="Generating Campaign..."
      >
        Generate Campaign
      </Button>
    </form>
  );
}