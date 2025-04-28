export const deslugify = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

export const slugify = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };
  