export const ChatBot = () =>{
    return <div>
         <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center mb-4">
        <div className="bg-green-400 h-6 w-6 rounded-full flex items-center justify-center text-white mr-2">
          <i className="fas fa-comment-alt"></i>
        </div>
        <h2 className="text-lg font-bold">Chat App</h2>
      </div>

      <div className="space-y-4">
        {/* Message 1 */}
        <div className="flex flex-col">
          <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-xs">
            Hey, how&apos;s it going?
          </div>
          <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
        </div>

        {/* Message 2 */}
        <div className="flex flex-col items-end">
          <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
            Pretty good, just working on a new project.
          </div>
          <span className="text-xs text-gray-500 mt-1">10:32 AM</span>
        </div>

        {/* Message 3 */}
        <div className="flex flex-col">
          <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-xs">
            That&apos;s great! Let me know if you need any help.
          </div>
          <span className="text-xs text-gray-500 mt-1">10:35 AM</span>
        </div>

        {/* Message 4 */}
        <div className="flex flex-col items-end">
          <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
            Actually, I could use a hand with the frontend.
          </div>
          <span className="text-xs text-gray-500 mt-1">10:37 AM</span>
        </div>
      </div>
    </div>
    </div>
}