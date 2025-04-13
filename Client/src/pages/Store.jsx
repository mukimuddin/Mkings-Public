import React, { useState, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';
import { theme, animations } from '../styles/theme';

// Lazy load components
const ProductCard = lazy(() => import('../components/ProductCard'));
const CategoryFilter = lazy(() => import('../components/CategoryFilter'));

const categories = ['All Products', 'T-Shirts', 'Hoodies', 'Accessories', 'Limited Edition'];

const products = [
  {
    id: 1,
    title: 'Classic Logo T-Shirt',
    category: 'T-Shirts',
    price: 29.99,
    image: '/images/store/tshirt-1.jpg',
    description: 'Comfortable cotton t-shirt with our signature logo',
    inStock: true
  },
  {
    id: 2,
    title: 'Premium Hoodie',
    category: 'Hoodies',
    price: 59.99,
    image: '/images/store/hoodie-1.jpg',
    description: 'Warm and stylish hoodie for everyday wear',
    inStock: true
  },
  {
    id: 3,
    title: 'Designer Watch',
    category: 'Accessories',
    price: 149.99,
    image: '/images/store/watch-1.jpg',
    description: 'Elegant timepiece with modern design',
    inStock: false
  },
  {
    id: 4,
    title: 'Limited Edition Jacket',
    category: 'Limited Edition',
    price: 199.99,
    image: '/images/store/jacket-1.jpg',
    description: 'Exclusive design with premium materials',
    inStock: true
  },
  {
    id: 5,
    title: 'Graphic T-Shirt',
    category: 'T-Shirts',
    price: 34.99,
    image: '/images/store/tshirt-2.jpg',
    description: 'Bold graphic design on soft cotton',
    inStock: true
  },
  {
    id: 6,
    title: 'Leather Wallet',
    category: 'Accessories',
    price: 49.99,
    image: '/images/store/wallet-1.jpg',
    description: 'Genuine leather wallet with multiple compartments',
    inStock: true
  }
];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = useCallback((category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    // Simulate loading state for smoother UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setIsLoading(true);
    setSearchQuery(e.target.value);
    // Simulate loading state for smoother UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const filteredProducts = React.useMemo(() => {
    if (!searchQuery && selectedCategory === 'All Products') return products;

    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageLayout
      title="Our Store"
      subtitle="Discover our collection of premium merchandise"
      backgroundImage="/images/store-hero.jpg"
    >
      {/* Search and Filter Section */}
      <StandardSection
        title="Shop Our Products"
        subtitle="Find the perfect item for your style"
        className="bg-[#0F0F0F]"
      >
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg bg-[#1A1A1A] border border-gray-700 focus:border-primary focus:outline-none text-white"
          />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-400">
              No products found matching your criteria
            </div>
          )}
        </motion.div>
      </StandardSection>

      {/* CTA Section */}
      <StandardSection
        title="Join Our Community"
        subtitle="Get exclusive access to new releases and special offers"
        background="#1A1A1A"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
      >
        <div className="text-center">
          <motion.a
            href="/signup"
            className="inline-block px-8 py-3 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up Now
          </motion.a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default Store; 