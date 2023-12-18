import { Box, Button, Flex } from '@radix-ui/themes';
import searchBanner from '../assets/searchBanner.jpg';
import '../styles/global.css';
import '@radix-ui/themes/styles.css';
import * as Label from '@radix-ui/react-label';
import useBooks from '../hooks/useBook';
import SearchInput from './SearchInput';

const Banner = () => {
  
  // Use the custom hook to get the book results
  const {searchTerm, getBooks} = useBooks();

  // Get the books on initial render
  const handleBookSearch = () => {
    getBooks(searchTerm);
  };

  // Render the banner
  return (
    <Box id="banner" position={'relative'}>
      <img src={searchBanner} alt="banner" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Box position={'absolute'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%, -50%)', minWidth: '280px' }}>
        <Box>
          <Label.Root className="LabelRoot">
            BOOK LIBRARY
          </Label.Root>
        </Box>
        <Flex align='center'>
          <SearchInput/>
          <Box>
            <Button onClick={handleBookSearch} style={{marginLeft:4, backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '4px 8px', cursor: 'pointer'}}>Search</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Banner;
