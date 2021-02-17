import React from 'react';
import styles from './text.css'
import classNames from 'classnames'

export enum Ecolors {
    black='black',
    white='white',
    orange='orange',
    green='green',
    greyF3='greyF3',
    grayF4='grayF4',
    greyEC='greyEC',
    greyD9='greyD9',
    greyC4='greyC4',
    grey99='grey99',
    grey66='grey66'
}
type TSizes = 28 | 20 | 16 | 14 |12 |10
interface ITextProps {
    As?:'span'|'h1' |'h2' | 'h3' | 'h4' | 'p' | 'div'
    children?:React.ReactNode
    size:TSizes
    bold?:boolean
    mobileSize?:TSizes
    tabletSize?:TSizes
    desktopSize?:TSizes
    color?: Ecolors
}

const Text: React.FC<ITextProps> = (props) => {
    const {As='span',
     children,
      size,
    mobileSize,
    desktopSize,
    tabletSize,
    color=Ecolors.black,
    bold=false
} = props
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        {[styles.bold]:bold},
        {[styles[`m${mobileSize}`]]:mobileSize}, 
        {[styles[`t${tabletSize}`]]:tabletSize}, 
        {[styles[`d${desktopSize}`]]:desktopSize}, 
        
    )
  return (
    <As className={classes}>
      {children}
    </As>
  );
};

export default Text;
