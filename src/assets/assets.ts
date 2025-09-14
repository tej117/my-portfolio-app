// src/assets/assets.ts

// Profile Image
import profileImg from './Me.jpg';

// Club Images
import AIClubImg from './AI_club.jpg';
import RoboticsClubImg from './Robotics_club_placeholder.jpg';

// Project Images
import TetrisImg from './tetris.jpg';
import ToxImg from './Tox.jpg';
import NautichatImg from './Nautichat.jpg';

// Icons
import githubIcon from "./github-mark-white.png";

// Export everything in an object (grouped by type)
export const Images = {
  projects: {
    Tetris: TetrisImg,
    Tox: ToxImg,
    Nautichat: NautichatImg
  },
  icons: {
    github: githubIcon,
  },
  clubs: {
    AIClub: AIClubImg,
    RoboticsClub: RoboticsClubImg
  },
  misc: {
    profile: profileImg,
  },
};