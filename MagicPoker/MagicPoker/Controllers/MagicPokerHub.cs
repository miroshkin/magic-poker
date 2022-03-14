using Microsoft.AspNetCore.SignalR;

namespace MagicPoker.Controllers
{
    public class MagicPokerHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
