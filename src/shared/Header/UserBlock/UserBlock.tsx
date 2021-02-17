import React from 'react';
import AnonIcon from '../../icons/AnonIcon';
import Text, { Ecolors } from '../../Text/Text';
import styles from './userBlock.css'
interface IUserBlockProps {
    avatarSrc?: string
    username?:string
}

const UserBlock: React.FC<IUserBlockProps> = ({avatarSrc, username}) => {
  
  return (
    <a className={styles.userBox}
    href="https://www.reddit.com/api/v1/authorize?client_id=hVwTTCVLQpFoMA&response_type=code&state=random_string&redirect_uri=http://localhost:3002/auth&duration=permanent&scope=read submit identity">
        <div className={styles.avatarBox}>
       
{avatarSrc
? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>
: <AnonIcon/>}
        </div>
      
      <div className={styles.username}>
          <Text size={20} color={username ? Ecolors.black : Ecolors.grey99 }>{username || 'аноним'}</Text>
      </div>
    </a>
  );
};

export default UserBlock;
