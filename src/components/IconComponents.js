import React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

const IconComponents = ({ links }) => {
    const handleClick = () => {
        localStorage.setItem('project', JSON.stringify(links));
    };
    const link = links
    return (
        <div>
            {link.GitHub && (
                <IconButton href={links.GitHub} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                </IconButton>
            )}
            {link.Behance && (
                <IconButton href={link.Behance} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <LanguageOutlinedIcon />
                </IconButton>
            )}
            {link.PagePath && (
                <IconButton href={link.PagePath} aria-label="Project Page" onClick={handleClick}>
                    <MenuBookOutlinedIcon />
                </IconButton>
            )}
            {link.Demo && (
                <IconButton href={link.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Repository">
                    <OpenInNewOutlinedIcon />
                </IconButton>
            )}
            {link.Video && (
                <IconButton href={link.Video} aria-label="Project Page" onClick={handleClick}>
                    <YouTubeIcon/>
                </IconButton>
            )}
        </div>
    );
};

export default IconComponents;