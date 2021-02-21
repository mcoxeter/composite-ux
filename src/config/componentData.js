module.exports = [
  {
    name: 'Box',
    code:
      "import * as React from 'react';\r\nimport styles from './Box.module.scss';\r\nexport interface BoxProps {\r\n    width?: string;\r\n    height?: string;\r\n    colorToken: ColorTokenNames;\r\n\r\n}\r\n\r\nexport const Box: React.FC<BoxProps> = () => {\r\n    return (<div className={styles['component']} style={{width: \"100px\", height: \"100px\", backgroundColor: \"red\" }}>Hello</div>);\r\n}\r\n\r\nexport type ColorTokenNames = \r\n    'page-base' |\r\n    'action-primary-default' |\r\n    'action-disabled' |\r\n    'action-primary-active' |\r\n    'action-primary-hover' |\r\n    'action-primary-focused'",
    examples: [
      {
        name: 'ExampleBox',
        code:
          "import React from 'react';\r\nimport { Box } from '../../../playroom/components';\r\n\r\nexport default function ExampleBox() {\r\n  return <Box colorToken={'action-disabled'} />;\r\n}\r\n",
      },
    ],
  },
  {
    name: 'PrimaryButton',
    code:
      "import * as React from 'react';\r\nimport styles from './PrimaryButton.module.scss';\r\n\r\nexport const PrimaryButton: React.FC<{}> = () => {\r\n    return (<button className={styles['component']} type={'button'}>Primary Button</button>);\r\n}",
    examples: [],
  },
];
