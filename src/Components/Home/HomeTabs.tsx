import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { getContents } from '../../Apis/CreateContent';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const MyTabs: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await getContents();
        setContents(response.data);
      } catch (error) {
        console.error('Failed to fetch contents', error);
      }
    };

    fetchContents();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Categorize content based on assumed 'category' or 'type'
  const categorizedContent = {
    'For you': contents.filter(content => content.category === 'For you'),
    'Following': contents.filter(content => content.category === 'Following'),
    'Python': contents.filter(content => content.category === 'Python'),
    'React': contents.filter(content => content.category === 'React'),
    'Self Improvement': contents.filter(content => content.category === 'Self Improvement'),
  };

  return (
    <Box sx={{ width: '80%', px: 10, py: 5 }}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'black',
          },
          '& .MuiTab-root.Mui-selected': {
            color: 'black',
          },
          '& .MuiTab-root': {
            color: 'grey',
          },
        }}
      >
        <Tab label="For you" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Following" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Python" id="tab-2" aria-controls="tabpanel-2" />
        <Tab label="React" id="tab-3" aria-controls="tabpanel-3" />
        <Tab label="Self Improvement" id="tab-4" aria-controls="tabpanel-4" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Content for "For you"</Typography>
        {categorizedContent['For you'].map((content, index) => (
          <div key={index}>
            <Typography variant="h6">{content.title}</Typography>
            <Typography>{content.body}</Typography>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Content for "Following"</Typography>
        {categorizedContent['Following'].map((content, index) => (
          <div key={index}>
            <Typography variant="h6">{content.title}</Typography>
            <Typography>{content.body}</Typography>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Content for "Python"</Typography>
        {categorizedContent['Python'].map((content, index) => (
          <div key={index}>
            <Typography variant="h6">{content.title}</Typography>
            <Typography>{content.body}</Typography>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Content for "React"</Typography>
        {categorizedContent['React'].map((content, index) => (
          <div key={index}>
            <Typography variant="h6">{content.title}</Typography>
            <Typography>{content.body}</Typography>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Content for "Self Improvement"</Typography>
        {categorizedContent['Self Improvement'].map((content, index) => (
          <div key={index}>
            <Typography variant="h6">{content.title}</Typography>
            <Typography>{content.body}</Typography>
          </div>
        ))}
      </TabPanel>
    </Box>
  );
};

export default MyTabs;
