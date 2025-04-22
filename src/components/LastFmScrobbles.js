// src/components/LastFmScrobbles.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrobblesCard = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0rem;
  padding: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  color: rgb(0, 0, 0);
  font-weight: 600;
  
  &:hover {
    transform: translateY(-0.15rem);
  }
`;

const ScrobbleItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const ScrobbleImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
`;

const ScrobbleDetails = styled.div`
  flex: 1;
`;

const TrackTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-weight: 600;
`;

const ArtistName = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 0.875rem;
    color: rgb(0, 0, 0);
    font-weight: 400;
`;

const LastFmScrobbles = () => {
    const [scrobbles, setScrobbles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScrobbles = async () => {
            try {
                const response = await fetch('https://us-central1-gwportfolio-db.cloudfunctions.net/getLastFmScrobbles');
                const data = await response.json();
                setScrobbles(data.scrobbles);
            } catch (error) {
                console.error('Error fetching Last.fm scrobbles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchScrobbles();
    }, []);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    if (loading) {
        return (
            <ScrobblesCard>
                <p>Loading my recent tracks...</p>
            </ScrobblesCard>
        );
    }

    return (
        <ScrobblesCard onClick={() => openInNewTab("https://www.last.fm/user/garrettwlastfm")}>
            <p>My recent songs:</p>
            {scrobbles.length === 0 ? (
                <p>No recent tracks found</p>
            ) : (
                scrobbles.map((scrobble, index) => (
                    <ScrobbleItem key={index}>
                        <ScrobbleImage
                            src={scrobble.albumArtUrl}
                            alt={`${scrobble.artist} - ${scrobble.track}`}
                        />
                        <ScrobbleDetails>
                            <TrackTitle>{scrobble.track}</TrackTitle>
                            <ArtistName>{scrobble.artist}</ArtistName>
                        </ScrobbleDetails>
                    </ScrobbleItem>
                ))
            )}
        </ScrobblesCard>
    );
};

export default LastFmScrobbles;