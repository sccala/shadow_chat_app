import classnames from 'classnames'

export const MessageBanner = props => {
  const { title, description, bgColor, textColor, borderColor, svgIcon } = props
  return (
    <>
      <div
        className={classnames(
          'pointer-events-auto border-t-4 rounded-b px-4 py-3 shadow-md mb-8 duration-1000',
          bgColor,
          textColor,
          borderColor
        )}
        role='alert'
      >
        <div className='flex'>
          <div className='py-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={svgIcon} />
            </svg>
          </div>
          <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
