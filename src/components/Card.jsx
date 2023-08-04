import React, { useState, useEffect } from 'react';
import "../App.css"

function App({ text }) {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [seenTitles, setSeenTitles] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((data) => {
                // Group albums by userId and combine titles
                const userIdMap = new Map();
                data.forEach((album) => {
                    const existingAlbum = userIdMap.get(album.userId);
                    if (existingAlbum) {
                        existingAlbum.titles.push(album.title);
                    } else {
                        userIdMap.set(album.userId, {
                            userId: album.userId,
                            titles: [album.title],
                        });
                    }
                });

                const modifiedData = Array.from(userIdMap.values());
                setCards(modifiedData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);

        // Add the clicked titles to the seenTitles list
        setSeenTitles((prevSeenTitles) => [...prevSeenTitles, ...card.titles]);
    };

    const isTitleSeen = (title) => seenTitles.includes(title);

    const filteredCards = cards.filter((card) =>
        card.userId.toString().includes(text)
    );

    return (
        <div className="App">
            <div className="split-container">
                <div className="card-container">
                    {filteredCards.map((card, index) => (
                        <div
                            key={index}
                            className={`card ${selectedCard === card ? 'active' : ''} ${isTitleSeen(card.titles[0]) ? 'seen' : ''}`}
                            onClick={() => handleCardClick(card)}
                        >
                            <div className="card-label">
                                {card.userId}
                            </div>
                            <div className="album-count">
                                {card.titles.length - card.titles.filter(isTitleSeen).length}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="item-list">
                    {selectedCard && (
                        <div>
                            <h2>User ID: {selectedCard.userId}</h2>
                            <ul>
                                {selectedCard.titles.map((title, index) => (
                                    <li key={index} className={isTitleSeen(title) ? 'seen' : ''}>
                                        {title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
