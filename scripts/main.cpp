#include <fstream>
#include <iostream>
#include <string>
float ball[4]; //0:x 1:y 2:vx 3:vy
float player[4]; //0:x 1:y 2:vx 3:vy
int MAX_PLAYER = 11;
std::ifstream myfile("/home/nh16/out.rcg");
std::ofstream outfile("/home/nh16/out.txt");

bool parseLine( const int n_line,const std::string &line);

bool parseShowLine(const int n_line, const std::string &line);

void parseDrawLine(const int n_line, const std::string &line);

void parsePlayModeLine(const int n_line, const std::string &line);

void parseTeamLine(const int line, const std::string &basicString);

int main() {
    if (myfile.is_open()) {
        std::string line;

        int n_line;
        while ( std::getline( myfile, line ))
        {
            ++n_line;
            if ( line.empty() )
            {
                return true;
            }

            parseLine(n_line, line);
        }
            myfile.close();
    }
}

bool parseShowLine(const int n_line, const std::string &line ) {

    const char *buf = line.c_str();

    int n_read = 0;
    // time
    int time = 0;
    std::sscanf(buf, "(show %d %n", &time, &n_read);
    buf += n_read;

    std::cout << time << "-" << n_read;

    // playmode
    if (*(buf + 1) == 'p') {
        int pm = 0;
        std::sscanf(buf, "(pm %d) %n ", &pm, &n_read);
        std::cout << "pm" << std::endl;
        buf += n_read;

        //std::cout << "-" << pm << "-" << n_read;
    }
    // team
    if (*(buf + 1) == 't') {
        std::cout << "la" << n_read;
    }
    std::cout << std::endl;

    //ball
    if (std::sscanf(buf, " ((b) %f %f %f %f) %n",
                    &ball[0], &ball[1], &ball[2], &ball[3],
                    &n_read) != 4) {
        std::cerr << "error: "
                  << "Illegal ball info \"" << line.substr (0,7) << "\""
                  << std::endl;
        return false;
    }
    outfile << ball[0]<< "," << ball[1] << " ";
    buf += n_read;

    //temp values
    float f1, f2, f3, f4, f5, f6, f7;
    char c1;
    short si1, si2, si3, si4, si5, si6, si7, si8, si9, si10, si11;

    // players
    char side;
    short unum;
    short type;
    int state;
    float x, y, vx, vy, body, neck;
    for (int i = 0; i < MAX_PLAYER * 2; ++i) {
        if (*buf == '\0' || *buf == ')') break;

        if (std::sscanf(buf,
                        " ((%c %hd) %hd %x %f %f %f %f %f %f %n",
                        &side, &unum,
                        &type, &state,
                        &x, &y, &vx, &vy, &body, &neck,
                        &n_read) != 10) {
           if(side != 'l' && side != 'r'){
               return false;
           }

        }
        outfile << x<< "," << y << " ";
        buf += n_read;

        int idx = unum - 1;
        if (side == 'r') idx += MAX_PLAYER;
        if (idx < 0 || MAX_PLAYER * 2 <= idx) {
            std::cerr << " error: "
                      << " Illegal player id. " << side << ' ' << unum
                      << " \"" << line.substr (0,7) << "\""
                      << std::endl;;
            return false;
        }

        player[0] = x;
        player[1] = y;
        player[2] = vx;
        player[3] = vy;
        std::cout << "\np" << player[0] << " - " << player[1] << std::endl;
        //
        //          << " - " << player[2] << " - " << player[3] << std::endl;



        if ( *buf != '('
                 && std::sscanf( buf,
                                 "%f %f %n",
                                 &f1, &f2, 
                                 &n_read ) == 2 )
        {
            buf += n_read;
        }

        if ( std::sscanf( buf,
                            " (v %c %f) %n ",
                            &c1, &f1,
                            &n_read ) != 2 )
        {
            std::cerr << n_line << ": error: "
                        << " Illegal player view . " << side << ' ' << unum
                        << " \"" << line << "\""
                        << std::endl;;
            return false;
        }
        buf += n_read;

        
        if ( std::sscanf( buf,
                              "(s %f %f %f %f) %n",
                              &f1, &f2, &f3, &f4,
                              &n_read ) != 4
                 && std::sscanf( buf,
                                 "(s %f %f %f) %n",
                                 &f5, &f6, &f7,
                                 &n_read ) != 3 )
        {
            std::cerr << n_line << ": error: "
                        << " Illegal player view or stamina. " << side << ' ' << unum
                        << " \"" << line << "\""
                        << std::endl;;
            return false;
        }
        buf += n_read;

        
        if ( *(buf + 1) == 'f'
                 && std::sscanf( buf,
                                 " (f %c %hd) %n",
                                 &c1, &si1,
                                 &n_read ) == 2 )
        {
            buf += n_read;
        }
 
        
        if ( std::sscanf( buf,
                            " (c %hd %hd %hd %hd %hd %hd %hd %hd %hd %hd %hd )) %n",
                            &si1, &si2, &si3, &si4, &si5, &si6, &si7, &si8, &si9, &si10, &si11,
                            &n_read ) != 11 )
        {
            std::cerr << n_line << ": error: "
                        << " Illegal player count. " << side << ' ' << unum
                        << " \"" << line << "\""
                        << std::endl;;
            return false;
        }
        buf += n_read;
    }

    outfile<<"\n";
}
bool
parseLine( const int n_line,
                   const std::string & line )
{
     // std::cout << line.substr (0,7)  << std::endl;
    if ( line.compare( 0, 3, "(sh" )== 0)
    {
        parseShowLine( n_line, line );
    }
    else if ( line.compare( 0, 3, "(dr" )== 0)
    {
        parseDrawLine( n_line, line );
    }
    else if ( line.compare( 0, 3, "(pl" )== 0)
    {
        parsePlayModeLine( n_line, line );
    }else if ( line.compare( 0, 3, "(te" )== 0)
    {
        parseTeamLine( n_line, line );
    }


    return true;
}

void parseTeamLine(const int n_line, const std::string &line) {
    std::cout <<"parseTeamLine "<< line.substr (0,7) << std::endl;
    outfile << line.substr(1, line.length() - 2) << "\n";
}

void parsePlayModeLine(const int n_line, const std::string &line) {

}

void parseDrawLine(const int n_line, const std::string &line) {

}

