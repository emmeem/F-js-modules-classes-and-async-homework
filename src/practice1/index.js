import getURL from './utils'
import {ADDRESS,PORT,PATH,REGION} from './constant.js'

const url = getURL(ADDRESS, PORT, PATH);

const region = REGION;

export {url, region};