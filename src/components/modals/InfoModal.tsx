import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="플레이 방법" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        단어를 6번의 시도 안에 추측하세요. 각각의 글자 추측 이후, 타일의 색상이 변합니다. 이 색상은 당신의 추측이 기존 단어와 얼마나 가까운지 보여줍니다.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㅈ"
          status="correct"
        />
        <Cell value="ㅏ" isCompleted={true} />
        <Cell value="ㅈ" isCompleted={true} />
        <Cell value="ㅓ" isCompleted={true} />
        <Cell value="ㅇ" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        자음 'ㅈ'은 올바른 자리에 있습니다.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ㅈ" isCompleted={true} />
        <Cell value="ㅏ" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㄹ"
          status="present"
        />
        <Cell value="ㅣ" isCompleted={true} />
        <Cell value="ㅂ" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        자음 'ㄹ'은 잘못된 자리에 있습니다.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ㄷ" isCompleted={true} />
        <Cell value="ㅗ" isCompleted={true} />
        <Cell value="ㄱ" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="ㄷ" status="absent" />
        <Cell value="ㅗ" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        자음 'ㄷ'은 어느 곳에도 맞지 않습니다.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Korean Wordle은        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          React-Wordle
        </a>{' '}의 오픈소스 버전 입니다. 
      </p>
    </BaseModal>
  )
}
