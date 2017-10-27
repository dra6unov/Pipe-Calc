using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Pipe_Calc.Startup))]
namespace Pipe_Calc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
