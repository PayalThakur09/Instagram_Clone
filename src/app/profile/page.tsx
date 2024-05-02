
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Fab from '@mui/material/Fab';

export default function ProfilePage() {

    return (
        <> 
        <Fab color="secondary" aria-label="profile">
         <AccountBoxOutlinedIcon />
        </Fab>
        <Typography variant="h4">
          Masha and Bear
        </Typography>
        <Typography variant="h5">
          Cartoon
        </Typography>
        <Typography variant="h5">
          Hindi/English
        </Typography>

        <ImageList sx={{ width: '100%', height: 650 }} cols={3} rowHeight={100} >
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </>
    )
}

const itemData = [
    {
        img: 'https://i.pinimg.com/736x/62/cd/84/62cd84f2b3895c8c8d8cef29067c603e.jpg',
        title: 'Bear',
    },  
    {
        img: 'https://i.pinimg.com/736x/c0/3f/f3/c03ff3662abc5fecd25563b536119ef5.jpg',
        title: 'Masha',
    },
    {
        img: 'https://i.pinimg.com/originals/6a/53/c5/6a53c5383129bdbb36d5cccc14d28141.png',
        title: 'Wolf',
    },
    {
        img: 'https://i.pinimg.com/170x/ba/af/b0/baafb08279f5e82654531986cf3e98c3.jpg',
        title: 'Panda',
    },
    {
        img: 'https://i.pinimg.com/236x/cb/7e/88/cb7e881b527543efda85878d1629f065.jpg',
        title: 'Pig',
    },
    {
        img: 'https://i.pinimg.com/474x/c9/9a/32/c99a32fdbbbd6f338e9853bd68c995d6.jpg',
        title: 'Penguin',
    },
    {
        img: 'https://i.pinimg.com/originals/f3/09/e6/f309e651fe78c39adbe610c2d1292e15.png',
        title: 'Squirrel',
    },
    {
        img: 'https://i.pinimg.com/originals/12/75/3a/12753a195edd57f0366f18b10e78e6f3.png',
        title: 'Goat',
    },
    {
        img: 'https://i.pinimg.com/564x/96/cb/c5/96cbc59efce75b60c788830c5a2a6fca.jpg',
        title: 'Black Bear',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtb8QJrb7xIQCaFS-P_n6i1ciS7EnqHn6WQ&usqp=CAU',
        title: 'Dog',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQVbsp9jMdx9PJsrWa9JPQma9U6PJL1CPDA&usqp=CAU',
        title: 'Bear-Bear',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
];