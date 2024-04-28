import { Metadata } from 'next';
import adminStyle from './page.module.css';

export const metadata: Metadata = {
  title: 'Admin',
};

export default function Admin() {
  return <div className={adminStyle.main}>Admin Page</div>;
}
