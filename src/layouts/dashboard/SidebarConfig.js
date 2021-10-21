import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import homeFill from '@iconify/icons-eva/home-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    path: '/dashboard/app',
    icon: getIcon(homeFill)
  },
  {
    title: 'AGRO หุ้นกลุ่มเกษตรและอุตสาหกรรมอาหาร',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'CONSUMP หุ้นกลุ่มสินค้าอุปโภคบริโภค',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  },
  
];

export default sidebarConfig;
