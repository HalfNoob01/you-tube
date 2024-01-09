import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';

function Videos({ videos,direction,width }) {
  if(!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction || { xs: 'row', md: "row" }}flexWrap="wrap" height="100vh" width={width} justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
