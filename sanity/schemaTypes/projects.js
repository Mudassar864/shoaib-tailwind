// offPlanProject.js

export default {
    name: 'offPlanProject',
    title: 'Off-Plan Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the off-plan project',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Slug for the off-plan project',
        options: {
          source: 'title',
          maxLength: 200, // Maximum length of the slug
          slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200), // Slug generation function
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
        description: 'Price of the off-plan project',
      },
      {
        name: 'beds',
        title: 'Beds',
        type: 'string',
        description: 'Number of beds in the off-plan project',
      },
      {
        name: 'area',
        title: 'Area',
        type: 'string',
        description: 'Area of the off-plan project (in square feet/meters)',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        description: 'Images of the off-plan project',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Description or content about the off-plan project',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        description: 'Location of the off-plan project',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Category of the off-plan project (e.g., residential, commercial, etc.)',
      },
      {
        name: 'lifestyle',
        title: 'Lifestyle',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Lifestyle amenities offered by the off-plan project',
      },
      {
        name: 'handover',
        title: 'Handover',
        type: 'string',
        description: 'Expected handover date of the off-plan project',
      },
    ],
  };
  