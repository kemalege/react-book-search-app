import { Avatar, Box, Card, Flex, TextField } from '@radix-ui/themes'
import { Book } from '../types/type'
import { useState } from 'react'
import '../styles/global.css';
import { useSpring, a } from '@react-spring/web'

const BookCard = ({ book }: { book: Book }) => {

  // Create a state for the flipped state of the card
  const [flipped, set] = useState(false)

  // Create a spring for the animation
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
    
  // Render the book card
  return (
    <Card key={book.id} onClick={() => set(state => !state)} style={{padding: '8px 12px', backgroundColor: "rgba(37, 16, 1, 0.4)", minHeight: "200px"}}>
        <a.div
            className="flip"
            style={{ opacity: opacity.to(o => 1 - o), transform }}
            >
        <Flex>
            <Avatar
                size="3"
                src={book.volumeInfo.imageLinks?.thumbnail}
                radius="full"
                fallback="book-image"
            />
            <Box>
                <TextField.Root style={{ padding: "0 12px 12px 12px", fontWeight: "600" }}>
                    {book.volumeInfo.title.toUpperCase()}
                </TextField.Root>
                <TextField.Root style={{ padding: "12px", fontWeight: "600", color: '#F39856'}}>
                    {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
                </TextField.Root>
            </Box>
        </Flex>
        </a.div>
        <a.div
            className="flip" style={{ opacity, transform, rotateX: '180deg' }}
        >
            <Flex>
                <Box>
                    <TextField.Root style={{ padding: "0 12px 12px 12px", maxHeight: "100px", whiteSpace: "wrap", overflowY: "scroll", textOverflow: "ellipsis" }}>
                        {book.volumeInfo.description}
                    </TextField.Root>
                    <TextField.Root style={{ padding: "12px", fontWeight: "600", color: '#F39856'}}>
                        {book.volumeInfo.publisher}""
                    </TextField.Root>
                    <TextField.Root style={{ padding: "12px"}}>
                        {book.volumeInfo.pageCount} pages
                    </TextField.Root>
                </Box>
            </Flex>
        </a.div>
    </Card>
  )
}

export default BookCard