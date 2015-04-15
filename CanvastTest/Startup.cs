using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CanvastTest.Startup))]
namespace CanvastTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
