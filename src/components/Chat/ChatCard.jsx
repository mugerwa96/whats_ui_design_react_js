import { Card } from "./Card"


export const ChatCard = () => {
    const chats = [
        {
            id: 1,
            title: "BITC YEAR 3",
            image: "images/1.jpg",
            describe: 'This is just a description sector, hoops',
            time: "12:00 pm"
        },
        {
            id: 2,
            title: "Online Jobs Ug",
            image: "images/2.png",
            describe: 'This is just a description sector, hoops',
            time: "yesterday"
        },
        {
            id: 1,
            title: "BITC YEAR 3",
            image: "images/1.jpg",
            describe: 'This is just a description sector, hoops',
            time: "12:00 pm"
        },
        {
            id: 2,
            title: "Online Jobs Ug",
            image: "images/2.png",
            describe: 'This is just a description sector, hoops',
            time: "yesterday"
        },
        {
            id: 3,
            title: "React Developers",
            image: "images/4.jpg",
            describe: 'This is just a description sector, hoops',
            time: "11:00 am"
        },
        {
            id: 4,
            title: "Laravel Livewire Gigs",
            image: "images/2.png",
            describe: 'This is just a description sector, hoops',
            time: "2 minutes "
        }
    ]
    return (
        <div>
            {
                chats.map((chat) => (
                    <Card
                        key={chat.id}
                        title={chat.title}
                        image={chat.image}
                        describe={chat.describe}
                        time={chat.time}
                    />
                ))
            }

        </div>
    )
}