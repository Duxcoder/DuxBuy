import { BREAKPOINTS } from '@/shared/config';

export const getColumn = (screenWidth: number) => {
  switch (true) {
    case screenWidth >= BREAKPOINTS.desktop:
      return 5;
    case screenWidth >= BREAKPOINTS.tablet:
      return 4;
    case screenWidth >= BREAKPOINTS.mobile:
      return 3;
    default:
      return 2;
  }
};

// export const getColumn = (screenWidth: number) => {
//   switch (true) {
//     case screenWidth >= 991:
//       return 5;
//     case screenWidth >= 767:
//       return 4;
//     case screenWidth >= 575:
//       return 3;
//     default:
//       return 2;
//   }
// };

export const getGridTemplateStyle = (column: number, row: number) => ({
  'grid-template-columns': `repeat(${column}, 1fr)`,
  'grid-template-rows': `repeat(${row}, 1fr)`
});
