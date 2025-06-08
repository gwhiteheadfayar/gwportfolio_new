import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
`;

const Header = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0.25rem;
  color: #111827;
`;

const TrackItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }
`;

const AlbumArt = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  object-fit: cover;
`;

const TrackInfo = styled.div`
  line-height: 1.3;
`;

const TrackTitle = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  margin: 0;
`;

const ArtistName = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const RecentlyPlayed = () => {
    // 1. Change state to hold an array of tracks
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchRecentTracks = async () => {
            try {
                const response = await fetch('https://us-central1-gwportfolio-db.cloudfunctions.net/getLastFmScrobbles');
                const data = await response.json();
                if (data.scrobbles && data.scrobbles.length > 0) {
                    // 2. Get the first 5 tracks from the response
                    setTracks(data.scrobbles.slice(0, 5));
                }
            } catch (error) {
                console.error('Error fetching Last.fm scrobbles:', error);
            }
        };
        fetchRecentTracks();
    }, []);

    if (tracks.length === 0) {
        return null; // Don't render if there are no tracks
    }

    // 3. Render a list by mapping over the tracks state
    return (
        <ListContainer>
            <Header>Recently Played</Header>
            {tracks.map((track, index) => (
                <TrackItem key={`${track.track}-${index}`} href={track.url} target="_blank" rel="noopener noreferrer">
                    <AlbumArt src={track.albumArtUrl} alt={track.track} />
                    <TrackInfo>
                        <TrackTitle>{track.track}</TrackTitle>
                        <ArtistName>{track.artist}</ArtistName>
                    </TrackInfo>
                </TrackItem>
            ))}
        </ListContainer>
    );
};

export default RecentlyPlayed;