module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "moduleNameMapper": {
      "^@store/(.*)": "<rootDir>/src/app/store/$1",
      "^@utils/(.*)": "<rootDir>/src/app/utils/$1",
      "^@components/(.*)": "<rootDir>/src/app/components/$1",
      "^@containers/(.*)": "<rootDir>/src/app/containers/$1",
      "^@styles/(.*)": "<rootDir>/src/styles/$1"
    }
  }
  
