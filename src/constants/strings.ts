export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['잘했어요!', '완벽해요', '잘했어요!']
export const GAME_COPIED_MESSAGE = '클립보드로 복사되었어요'
export const NOT_ENOUGH_LETTERS_MESSAGE = '글자 수가 부족해요'
export const WORD_NOT_FOUND_MESSAGE = '단어를 찾을 수 없어요'
export const HARD_MODE_ALERT_MESSAGE =
  '하드모드는 시작하기 전에만 활성화할 수 있어요!'
export const HARD_MODE_DESCRIPTION =
  '공개된 단어는 무조건 사용되어야 해요.'
export const HIGH_CONTRAST_MODE_DESCRIPTION = '색깔들을 더 구별하기 쉽게 바꿔요'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `틀렸어요, 정답은 ${solution} 이였습니다.`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  ` ${guess} 이 반드시 ${position}번째 자리에 있어야 해요.`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter}이 반드시 포함되어야 해요.`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = '통계'
export const GUESS_DISTRIBUTION_TEXT = '도전 분포'
export const NEW_WORD_TEXT = '다음 워들까지'
export const SHARE_TEXT = '공유하기'
export const SHARE_FAILURE_TEXT =
  '결과를 공유할 수 없습니다. 이 기능은 일부 또는 모든 지원 브라우저에서 보안 컨텍스트(HTTPS)에서만 사용할 수 있어요'
export const MIGRATE_BUTTON_TEXT = '옮기기'
export const MIGRATE_DESCRIPTION_TEXT =
  '이 버튼을 클릭하여 당신의 통계를 새로운 기기로 옮기세요.'
export const TOTAL_TRIES_TEXT = '전체 도전'
export const SUCCESS_RATE_TEXT = '정답률'
export const CURRENT_STREAK_TEXT = '최근 연속 정답'
export const BEST_STREAK_TEXT = '최다 연속 정답'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "임베디드 브라우저를 사용 중입니다. 결과를 공유하거나 저장하는 데 문제가 발생할 수 있습니다. 기기의 기본 브라우저를 사용하는 것이 좋습니다."

export const DATEPICKER_TITLE = '날짜를 선택하세요'
export const DATEPICKER_CHOOSE_TEXT = '선택'
export const DATEPICKER_TODAY_TEXT = '오늘'
export const ARCHIVE_GAMEDATE_TEXT = '게임 날짜'
